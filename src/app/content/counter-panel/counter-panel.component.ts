import { Component, OnInit } from '@angular/core';
import { AppService } from "app/app.service";
import { ICounterData } from "app/content/counter-panel/counter/counter.component";

@Component({
  selector: 'app-counter-panel',
  templateUrl: './counter-panel.component.html',
  styleUrls: ['./counter-panel.component.css']
})
export class CounterPanelComponent implements OnInit {
  AllData: CounterData[];

  times: number[];

  allCurrent: number;
  allPrevious: number;


  constructor(public appser: AppService) {
    this.AllData= new Array();
    this.AllData[0] = new CounterData();
    this.AllData[0].title = "Title";
    this.AllData[0].afterNumber = 2500;
    this.AllData[0].beforeNumber = 2000;
    this.AllData[0].percentage = 0.5;
    this.AllData[0].beforePeriod = "last Week";
    this.AllData[0].afterPeriod = "";
    this.AllData[0].direction = true;
  }

  ngOnInit() {

    this.AllData[0] = this.getCategoryData("All");
    this.AllData[1] = this.getCategoryData("ICT");
    this.AllData[2] = this.getCategoryData("Engineering");
    this.AllData[3] = this.getCategoryData("Money");


  }
  getCategoryData(category: string): ICounterData {
    var data = new CounterData();
    this.appser.getTimes().subscribe(times => {
      //set title
      data.title = category;
      //set time if not already set
      if (!this.times)
        this.times = times.map((time) => { return time._id })
          .map(Number)
          .sort((a, b) => { return a - b })
          .reverse();

      //set Period
      data.afterPeriod = new Date(this.times[0]).toLocaleString();
      data.beforePeriod = new Date(this.times[1]).toLocaleString();

      this.appser.getJobStats(category, this.times[0].toString()).subscribe(ctime => {
        var allCurrent = ctime[0].total;
        data.afterNumber = allCurrent;

        this.appser.getJobStats(category, this.times[1].toString()).subscribe(ctime => {
          var allPrevious = ctime[0].total;
          data.beforeNumber = allPrevious;
          var perc = (1 - allCurrent / allPrevious);
          + " (" + allPrevious + ")";
          data.percentage = Math.abs(parseFloat(perc.toFixed(2)));
          data.direction = allCurrent > allPrevious;

        });
      });

    });
    return data;
  }



}
class CounterData implements ICounterData {
  title: string;
  beforeNumber: number;
  afterNumber: number;
  percentage: number;
  beforePeriod: string;
  afterPeriod: string;
  direction: boolean;


}
