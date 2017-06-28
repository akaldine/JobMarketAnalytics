import { Component, OnInit, Output, Input, EventEmitter, Injectable } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  public items;
  public _selected: string;

  @Output('selectedUpdated') selectedUpdated = new EventEmitter<string>();


  @Input('selected')
  set selected(str: string){
    this._selected = str;
  }

  constructor(public appser: AppService) {
    this.selectedUpdated.emit(this._selected);
   }

  ngOnInit() {
    this.appser.getCategories().subscribe(items => {
      this.items = items;
      this._selected = items[0]._id;
    });
  }
  selectionChanged(item: string) {
    this._selected = item;
    this.selectedUpdated.emit(this._selected);
  }
}
export class Selection {
  public _id: string;
}
