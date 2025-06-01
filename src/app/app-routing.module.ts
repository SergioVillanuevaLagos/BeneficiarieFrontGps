import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path: 'beneficiaries',
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  {
    path: '',               // Ruta por defecto
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',             // Ruta comodín para rutas no definidas
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
