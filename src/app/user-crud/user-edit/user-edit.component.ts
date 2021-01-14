import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  usr:any;
  id:any;
  name:any;
   phone:any;
   address:any;
  constructor(private _Activatedroute:ActivatedRoute,private usrService: UserService,private router: Router) { }
  @ViewChild("f") form: any;

  ngOnInit() {
    this.id=this._Activatedroute.snapshot.params['id'];
    let usrs=this.usrService.getUsers();
    this.usr=usrs.find((p:any) => p.id==this.id);
    console.log(this.usr);
  }
  onSubmit() {
    if (this.form.value) {
      console.log(this.form.value)
    this.usrService.updateUsers(this.usr,this.form.value);
    this.router.navigate(['users-list']);
    }
  }
}