import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from 'angular2-patternfly-shims/lib/Tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptystateComponent } from './emptystate/emptystate.component';
import { ListviewComponent } from './listview/listview.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { TabviewComponent } from './tabview/tabview.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    NavbarComponent,
    DashboardComponent,
    EmptystateComponent,
    ListviewComponent,
    ToolbarComponent,
    TabviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
