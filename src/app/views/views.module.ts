import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { ComponentsModule } from "../shared/components/components.module";
import { ViewsRoutingModule } from './views-routing.module';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { SideBardComponent } from '../shared/components/side-bard/side-bard.component';
import { UserListComponent } from '../shared/components/user-list/user-list.component';

@NgModule({
  declarations: [
    BeneficiariesComponent,
    HomeComponent,
    SideBardComponent,
    UserListComponent
  ],

  imports: [
    CommonModule,
    ComponentsModule,
    ViewsRoutingModule,
    FormsModule

]
})
export class ViewsModule { }
