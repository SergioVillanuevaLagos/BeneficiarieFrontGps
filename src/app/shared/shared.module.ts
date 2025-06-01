import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserListComponent } from './components/user-list/user-list.component';
import { SideBardComponent } from './components/side-bard/side-bard.component';
import { NavbardComponent } from './components/navbard/navbard.component';

@NgModule({
  declarations: [
    UserListComponent,
    SideBardComponent,
    NavbardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule // 👈 lo agrego ya que lo importaste pero no lo usabas aún
  ],
  exports: [
    UserListComponent,
    SideBardComponent,
    NavbardComponent
  ]
})
export class SharedModule { }
