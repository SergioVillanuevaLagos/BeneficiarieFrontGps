// src/app/service.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() {}

  // Métodos de ejemplo
  getData() {
    return 'data';
  }
}
