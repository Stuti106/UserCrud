import { Injectable } from '@angular/core';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserData {

  constructor() {
    super();
    this.load();
   }
   getUsers() {
     let usr = JSON.parse(localStorage.getItem('users')  || '{}');
     return usr;
   }

   addUsers(newUsr : any) {
      let usrs = JSON.parse(localStorage.getItem('users')  || '{}');
      usrs.push(newUsr);
      localStorage.setItem('users', JSON.stringify(usrs));
   }

   deleteUsers(id : any) {
     let usrs = JSON.parse(localStorage.getItem('users')  || '{}');
     for(let i = 0; i <usrs.length; i++) {
      if(usrs[i].id == id) {
        usrs.splice(i, 1);
      }
   }
      localStorage.setItem('users', JSON.stringify(usrs));
   }

     updateUsers(oldUsr : any, newUsr : any){  let usrs = JSON.parse(localStorage.getItem('users')  || '{}');

     for(let i = 0; i <usrs.length; i++) {
      if(usrs[i].id == oldUsr.id) {
        usrs[i] = newUsr;
      }
   }
      localStorage.setItem('users', JSON.stringify(usrs));
   }
}
