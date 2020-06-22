import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JiraffAdministrationComponent } from './comps/jiraff-administration/jiraff-administration.component';
import { JPageComponent } from './comps/jiraff-administration/j-page/j-page.component';
import { JItemComponent } from './comps/jiraff-administration/j-item/j-item.component';
import { JDetailsComponent } from './comps/jiraff-administration/j-details/j-details.component';
import { JLabelSpanComponent } from './comps/jiraff-administration/j-label-span/j-label-span.component';

@NgModule({
  declarations: [
    AppComponent,
    JiraffAdministrationComponent,
    JPageComponent,
    JItemComponent,
    JDetailsComponent,
    JLabelSpanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
