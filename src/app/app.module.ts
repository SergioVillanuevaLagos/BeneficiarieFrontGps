import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Verifica que esta ruta sea correcta
import { ComponentsModule } from './shared/components/components.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule, // Asegúrate que esta ruta sea correcta
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
