import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptystateComponent } from './emptystate/emptystate.component';
import { ListviewComponent } from './listview/listview.component';
import { TabviewComponent} from './tabview/tabview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'listview',
    component: ListviewComponent
  },
  {
    path: 'emptystate',
    component: EmptystateComponent
  },
  {
    path: 'tabview',
    component: TabviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
