import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {
  formdata;
  constructor(private user:UserService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      username: new FormControl()
   });
  }
  onClickSubmit(data){
    //alert("Button is clicked"+ data.username);
    this.user.setUser(data.username);
    var arr = [data.username];
  }

}
