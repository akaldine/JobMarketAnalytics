import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {


  // @Input() public  Title='title';
  // @Input() public  percent='80';
  public stats: [any];
  public selectedCategory: any;
  constructor(public appser: AppService) { }

  ngOnInit() {
    this.getStats();
    // console.log("Stats Here");


  }
  categoryChanged(selected: string) {
    // alert("selected Changed");
    this.getStats(selected);
  }
  getStats(domain= 'All') {
    console.log(domain);
    this.appser.getJobStats(domain).subscribe(items => {
       this.stats = [{
        title: 'Total Jobs',
        percent: '100',
        value: items[0].total
      },
      {
        title: 'Non-Disclosed Salary',
        percent: (items[0].havenoSalary / items[0].total * 100).toFixed(0).toString(),
        value: items[0].havenoSalary
      },
      {
        title: 'Processed',
        percent: (items[0].totalrefined / items[0].total * 100).toFixed(0).toString(),
        value: items[0].totalrefined
      },
      {
        title: 'Ambiguous Salary Period',
        percent: (items[0].numNoPeriod / items[0].total * 100).toFixed(0).toString(),
        value: items[0].numNoPeriod
      }];

    });
  }

}
