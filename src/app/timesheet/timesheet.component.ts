import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  formdata;
  constructor(private user:UserService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      entry: new FormControl(),
      exit: new FormControl()
   });
  }
  
  onClickSubmit(data){
    //alert("Button is clicked"+ data.username);
    this.user.setUser(data.entry);
    var arr = [data.username];
  }

}
