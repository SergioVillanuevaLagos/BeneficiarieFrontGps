import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ¡Muy importante!
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';

// Importa el módulo que contiene el componente 'NavbardComponent' y otros
import { ComponentsModule } from './shared/components/components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // NO DECLARES AppComponent porque es standalone
  declarations: [
    // aquí no va AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    // Elimina AppComponent de los imports
  ],
  providers: []
  // Elimina bootstrap: [AppComponent]
})
export class AppModule { }
