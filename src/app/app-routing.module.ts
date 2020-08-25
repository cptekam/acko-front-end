import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerActivityComponent } from './customer-activity/customer-activity.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';


const routes: Routes = [
 {path:'', component: CustomerHomeComponent},
  {path :'customer', component: CustomerActivityComponent},
  {path :'history', component: CustomerHistoryComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
