import { Component, OnInit } from '@angular/core';
import { MyDateRangePickerModule, IMyDrpOptions } from 'mydaterangepicker';

@Component({
  selector: 'app-choosedate',
  templateUrl: './choosedate.component.html',
  styleUrls: ['./choosedate.component.css']
})
export class ChoosedateComponent implements OnInit {
  public myDateRangePickerOptions: IMyDrpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
  };
  public model: Object = {
    beginDate: { year: 2018, month: 10, day: 9 },
    endDate: { year: 2018, month: 10, day: 19 }
  };

  constructor() { }

  ngOnInit() {
  }

}
