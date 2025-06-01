// test.ts
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

// Declaración para Webpack (usado por Angular CLI para cargar automáticamente los archivos .spec.ts)
declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// Inicializa el entorno de pruebas
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Encuentra y carga todos los archivos .spec.ts
const context = require.context('./', true, /\.spec\.ts$/);
context.keys().forEach(context);
