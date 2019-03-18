import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  formdata;
  constructor() { }

  ngOnInit() {
    this.formdata = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      mobileno: new FormControl(),
      emailid: new FormControl(),
   });
  }
  onClickSubmit(data){
    alert("User "+ data.firstname+" details are updated successfully");
    //this.user.setUser(data.firstname);
  }
}
