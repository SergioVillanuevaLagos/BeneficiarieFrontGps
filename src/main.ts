import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

import { appRoutes } from './app/app-routing.module'; // Si tienes rutas
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes),
    provideAnimations(),
    importProvidersFrom(
      HttpClientModule,
      ModalModule.forRoot(),
      // otros módulos que necesites (FormsModule, ReactiveFormsModule, etc)
    )
  ]
}).catch(err => console.error(err));
