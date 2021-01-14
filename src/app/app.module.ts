import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAddComponent } from './user-crud/user-add/user-add.component';
import { UserEditComponent } from './user-crud/user-edit/user-edit.component';
import { UserListComponent } from './user-crud/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAddComponent,
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
