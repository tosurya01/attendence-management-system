import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { AllusersComponent } from './allusers/allusers.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  {path: 'adduser', component: AdduserComponent},
  {path: 'allusers', component: AllusersComponent},
  {path: 'deleteuser', component: DeleteuserComponent},
  {path: 'updateuser', component: UpdateuserComponent},
  {path: 'timesheet', component: TimesheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AdduserComponent, AllusersComponent, DeleteuserComponent, UpdateuserComponent, TimesheetComponent ];