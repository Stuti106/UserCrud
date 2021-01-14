import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {

   usrs:any;
   name:any;
   phone:any;
   address:any;
  // mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  constructor(private usrService: UserService,private router: Router) { }

  @ViewChild("f") form: any;

  ngOnInit(): void {
    this.usrs = this.usrService.getUsers();
  }

  onSubmit() {
    if (this.form.value) {
    let newUser = {
      id:uuid(),
      name: this.form.value.name,
      phone: this.form.value.phone,
      address: this.form.value.address,

    }
    this.usrs.push(newUser);
    this.usrService.addUsers(newUser);
    this.router.navigate(['users-list']);
    }
  }

}
