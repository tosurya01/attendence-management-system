import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  formdata;
  constructor(private user:UserService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      mobileno: new FormControl(),
      emailid: new FormControl(),
   });
  }
  
  onClickSubmit(data){
    alert("User "+ data.firstname+" added successfully");
    //this.user.setUser(data.firstname);
  }
 

}
