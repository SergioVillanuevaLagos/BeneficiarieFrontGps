import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
import { SideBardComponent } from './components/side-bard/side-bard.component';


@NgModule({
  declarations: [
    UserListComponent,
    SideBardComponent

  ],
  imports: [
    CommonModule,
     FormsModule,

  ],
  exports: [
    UserListComponent,
    SideBardComponent,

  ]

})
export class SharedModule { }
