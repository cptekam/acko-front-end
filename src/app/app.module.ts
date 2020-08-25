import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerActivityComponent } from './customer-activity/customer-activity.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { HeaderAckoHeaderComponent } from './header/acko-header.component';

@NgModule({
  declarations: [
    AppComponent,  
    CustomerActivityComponent, CustomerHistoryComponent, CustomerHomeComponent, HeaderAckoHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
