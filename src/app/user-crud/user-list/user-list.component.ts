import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  usrs : any;
  constructor(private usrService: UserService) { }

  ngOnInit() {
    this.usrs = this.usrService.getUsers();
  }

  deleteUsers(id : any) {
    for(let i = 0; i < this.usrs.length; i++) {
      if(this.usrs[i].id == id) {
          this.usrs.splice(i, 1);
      }
    }

    this.usrService.deleteUsers(id);
  }

}
