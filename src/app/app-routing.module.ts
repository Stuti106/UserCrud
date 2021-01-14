import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAddComponent } from './user-crud/user-add/user-add.component';
import { UserEditComponent } from './user-crud/user-edit/user-edit.component';
import { UserListComponent } from './user-crud/user-list/user-list.component';

const routes: Routes = [ {
  path: '',
  redirectTo: 'users-list',
  pathMatch: 'full'
},
{
  path: 'users-list',
  component: UserListComponent,
},
{
  path: 'users-add',
  component: UserAddComponent,
},
{
  path: 'users-edit/:id',
  component: UserEditComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
