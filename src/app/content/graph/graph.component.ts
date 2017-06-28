import { Component, OnInit } from '@angular/core';
//import '../../../../bower_components/Plotlyjs/plotly.js';
import { BehaviorSubject } from "rxjs/Rx";
import { AppService } from "app/app.service";
import * as Plotly from "plotly.js/dist/plotly-basic.min.js"
//declare var Plotly:any;

const windowSize$ = new BehaviorSubject(getWindowSize());
function getWindowSize() {
  return {
    height: window.innerHeight,
    width: window.innerWidth
  };
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  public cats: any;
  public stats: any;
  public data: [any];
  public isNormalized: string;
  public tempData:Array<any>;

  constructor(public appser: AppService) { }

  ngOnInit() {
    this.loadGraph('GM', "new");
    // Observable.fromEvent(window, 'resize')
    //   .map(this.reloadGraph)
    //   .subscribe(this.reloadGraph);
  }
  toggleNormalization() {
    
    this.isNormalized = this.isNormalized == "1" ? "0" : "1";
    this.reloadGraph();
    //console.log("toggling normalization" + this.isNormalized)
  }
  addGraph(category: string) {
    //console.log("Event Fired")
    this.loadGraph(category, "add");
  }
  changeGraph(category: string) {
    //console.log("Event Fired")
    this.loadGraph(category, "new");
  }
  reloadGraph() {

    this.tempData=new Array<any>();
    for (let k = 0; k < this.data.length; k++ )
    {
      let temp = {
        x: this.data[k].x.slice(),
        y: this.data[k].y.slice(),
        type: this.data[k].type,
        orientation: this.data[k].orientation,
        name: this.data[k].name
      };
      this.tempData.push(temp);
    }



    if (this.isNormalized == '1') {
      for (var i = 0; i < this.tempData.length; i++){
        var max = Math.max.apply(Math,this.tempData[i].y);
        //console.log("Max" + max);
        //console.log(this.tempData[i].y);
        for (var k = 0; k < this.tempData[i].y.length; k++)
          this.tempData[i].y[k] /= max;                      
      }      
    }
    //console.log("reloading graph");
      Plotly.newPlot(document.getElementById('tester'), this.tempData, { margin: { t: 0 } });

  }
  loadGraph(category="All", option: string) {
    //console.log("Plotly");
    //console.log(Plotly);
    var TESTER = document.getElementById('tester');

    this.appser.getJobSummary(category).subscribe(cats => {
      this.cats = cats;
      this.data = [
        {
          x: cats.map((obj) => obj._id * 100000),
          y: cats.map(obj => obj.count),
          type: 'bar',
          orientation: 'v',
          name: category
        }
      ];
      
      if (option == "add"){
        Plotly.plot(TESTER, this.data, { margin: { t: 0 } });
        let tempTESTER = <any>document.getElementById('tester');
        this.data=tempTESTER.data;
        
      }
      else Plotly.newPlot(TESTER, this.data, { margin: { t: 0 } });

    });
  }

}
