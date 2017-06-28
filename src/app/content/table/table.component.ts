import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { LocalDataSource } from 'ng2-smart-table';


@Component({
  selector: 'app-table',
  templateUrl: `./table.component.html`
})

export class TableComponent implements OnInit {


  public jobs: LocalDataSource;
  public settings = {
    columns: {
      title: {
        title: 'Title',
        type: 'html',
        editable: false
      },
      newsalary: {
        title: 'Salary',
        editable: false
      },
      type: {
        title: 'Category',
        editable: false
      },
      site: {
        title: 'Site',
        editable: false
      },
      num: {
        title: 'Salary Raw',
        editable: false
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    pager: {
      display: true,
      perPage: 50
    }

  };

  constructor(public el: ElementRef, public appser: AppService) { }

  private drawTable() {
    this.jobs = new LocalDataSource();

    this.jobs.setSort([{
      field: 'num',
      direction: 'desc'
    }], false);

    this.jobs.setPaging(2, 10, false);
    this.appser.getAllItems().subscribe(items => {
      this.jobs.load(
        items.map(item => {
          item.title = '<a href=' + item.link + '  target=\'_blank\'>' + item.title + '</a>';
          item.num = item.period == 'monthly' ? item.num * 12 : item.num;
          return item;
        }
        ));
    });
  }



  ngOnInit() {
    console.log('Drawing Table');
    this.drawTable();

  }
}
