import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
import { TimerService } from './timer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todydate;
  formdata;
  title = 'attendence-management-system';
  constructor(private timer:TimerService) { }
  
  ngOnInit() {
    this.todydate = this.timer.showTodayDate();
    this.formdata = new FormGroup({
    username:new FormControl("user name"),
    password:new FormControl("abcd1234")
       });
  }  
}
