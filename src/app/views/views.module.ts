import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { ComponentsModule } from "../shared/components/components.module";
import { ViewsRoutingModule } from './views-routing.module';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    BeneficiariesComponent,
    HomeComponent,
  ],

  imports: [
    CommonModule,
    ComponentsModule,
    ViewsRoutingModule,
    FormsModule

]
})
export class ViewsModule { }
