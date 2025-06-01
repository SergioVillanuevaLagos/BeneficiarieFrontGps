import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Añadido
import { FormsModule } from '@angular/forms';

import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from "../shared/components/components.module";
import { ViewsRoutingModule } from './views-routing.module';

@NgModule({
  declarations: [
    BeneficiariesComponent,
    HomeComponent
    // ❌ Removidos: SideBardComponent y UserListComponent (deben estar solo en ComponentsModule)
  ],
  imports: [
    CommonModule,
    RouterModule, // 👈 Importante para router-outlet
    ComponentsModule, // 👈 Ya incluye los componentes compartidos
    ViewsRoutingModule,
    FormsModule
  ],
  exports: [
    BeneficiariesComponent, // 👈 Opcional: solo si se usan fuera
    HomeComponent
  ]
})
export class ViewsModule { }
