import { Component,  Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  @Input() counterData:ICounterData =
  {
      title: 'Title',
      beforeNumber: 2500,
      afterNumber: 2000,
      percentage: 0.5,
      beforePeriod: 'Last Week',
      afterPeriod: 'This Week',
      direction: true
    };
}
export interface ICounterData {
  title: string;
  beforeNumber: number;
  afterNumber: number;
  percentage: number;
  beforePeriod: string;
  afterPeriod: string;
  direction: boolean;
}

