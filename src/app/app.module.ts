import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerService } from './timer.service';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { AllusersComponent } from './allusers/allusers.component';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    AdduserComponent,
    UpdateuserComponent,
    DeleteuserComponent,
    AllusersComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
