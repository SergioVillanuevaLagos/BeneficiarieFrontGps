import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';


@NgModule({
  declarations: [
    UserListComponent

  ],
  imports: [
    CommonModule,
     FormsModule,

  ],
  exports: [
    UserListComponent

  ]

})
export class SharedModule { }
