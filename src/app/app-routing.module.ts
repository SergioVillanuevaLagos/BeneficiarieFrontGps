import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeneficiariesComponent } from './views/beneficiaries/beneficiaries.component';
import { HomeComponent } from './views/home/home.component';


const routes: Routes = [

   {
    path: 'home',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule), component:HomeComponent
  },

  {
    path: 'beneficiaries',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule), component:BeneficiariesComponent
  }, {
    path: 'beneficiares',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
