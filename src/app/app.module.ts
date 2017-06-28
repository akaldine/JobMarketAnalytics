import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { BsDropdownModule } from 'ngx-bootstrap';
//import {AngularFireModule} from 'angularfire2';
import { AngularFireModule } from 'angularfire2';
import { AppRoutingModule, routedComponents } from './app-routing.module';
// App is our top level component
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { StatsComponent } from './content/stats/stats.component';
import { CounterComponent } from './content/counter-panel/counter/counter.component';
import { DropdownComponent } from './content/dropdown/dropdown.component';
import { CounterPanelComponent } from './content/counter-panel/counter-panel.component';
import { ChoosedateComponent } from './content/choosedate/choosedate.component';
import { GraphComponent } from './content/graph/graph.component';
import { InboxComponent } from './content/inbox/inbox.component';
import { NoContentComponent } from './no-content/no-content';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopNavBarComponent } from './topnavbar/topnavbar.component';
import { XLargeDirective } from './x-large/x-large.directive';
import { TableComponent } from './content/Table/table.component';

// Application wide providers

export const firebaseConfig = {
  apiKey: 'AIzaSyDpEHguCImN-Ejohywaq9h7jPm0OEt5kag',
  authDomain: 'gentangcli.firebaseapp.com',
  databaseURL: 'https://gentangcli.firebaseio.com',
  projectId: 'gentangcli',
  storageBucket: 'gentangcli.appspot.com',
  messagingSenderId: '893984283765'
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    SidebarComponent,
    TopNavBarComponent,
    XLargeDirective,
    StatsComponent,
    CounterComponent,
    DropdownComponent,
    TableComponent,
    CounterPanelComponent,
    ChoosedateComponent,
    GraphComponent,
    routedComponents,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpModule,
    Ng2SmartTableModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // ,
    // AngularCesiumModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
