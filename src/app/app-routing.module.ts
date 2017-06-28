import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from 'app/content/content.component';
import { InboxComponent } from 'app/content/inbox/inbox.component';
import { AboutComponent } from 'app/about/about.component';
import { NoContentComponent } from 'app/no-content/no-content';


export const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'inbox', component: InboxComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NoContentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [
  ContentComponent,
  InboxComponent,
  AboutComponent,
  NoContentComponent,
];
