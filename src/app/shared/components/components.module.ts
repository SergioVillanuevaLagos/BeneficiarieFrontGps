import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTableComponent } from './user-table/user-table.component';
import { NavbardComponent } from './navbard/navbard.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { SideBardComponent } from './side-bard/side-bard.component';
@NgModule({
  declarations: [
    UserTableComponent,
    NavbardComponent,
    UserListComponent,
    ModalComponent,
    SideBardComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  exports: [
    UserTableComponent,
    NavbardComponent,
    SideBardComponent,
    UserListComponent,
  ]
})
export class ComponentsModule { }
