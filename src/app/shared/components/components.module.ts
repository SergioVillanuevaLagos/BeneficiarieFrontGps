import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importa todos los componentes
import { NavbardComponent } from './navbard/navbard.component';
import { SideBardComponent } from './side-bard/side-bard.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    NavbardComponent,
    SideBardComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbardComponent,
    SideBardComponent,
    UserListComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ComponentsModule { }
