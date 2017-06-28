import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getAllItems() {
    return this.http.get('http://localhost:8080/job')
      .map(res => res.json());
  }
  getJobSummary(category:string) {
      return this.http.get('http://localhost:8080/getJobSummary/' + category)
        .map(res => res.json());
  }
  getJobStats(category:string,time="") {
    console.log('http://localhost:8080/getJobStats/' + category + '?time=' + time);
    return this.http.get('http://localhost:8080/getJobStats/' + category + '?time=' + time)
      .map(res => res.json());
  }
  getCategories() {
    return this.http.get('http://127.0.0.1:8080/getCategories')
      .map(res => res.json());
  }
    getTimes() {
    return this.http.get('http://127.0.0.1:8080/getJobScrapeTimes')
      .map(res => res.json());
  }
}
