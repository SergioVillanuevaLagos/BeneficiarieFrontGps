import { TestBed } from '@angular/core/testing';
import { BeneficiaryService } from './beneficiary.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { IUser } from '../user';

describe('BeneficiaryService', () => {
  let service: BeneficiaryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BeneficiaryService]
    });
    service = TestBed.inject(BeneficiaryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch users', () => {
    const dummyUsers: IUser[] = [
      {
        id: '1',
        rut: '12345678-9',
        nombres: 'Juan',
        apellidos: 'Pérez',
        fechaNacimiento: '1990-01-01',
        direccion: 'Calle Falsa 123',
        telefono: '123456789',
        permisos: 'ver,editar',
        comuna: 'Santiago',
        email: 'juan@example.com',
        fechaRegistro: '2024-01-01',
        activo: true,
        tipo: 'admin',  // agregado para cumplir interfaz
        credenciales: { // agregado para cumplir interfaz
          usuario: 'juanp',
          hashPassword: 'hash123'
        }
      },
      {
        id: '2',
        rut: '98765432-1',
        nombres: 'Ana',
        apellidos: 'Gómez',
        fechaNacimiento: '1992-02-02',
        direccion: 'Avenida Siempre Viva 742',
        telefono: '987654321',

        permisos: 'ver',
        comuna: 'Providencia',
        email: 'ana@example.com',
        fechaRegistro: '2024-01-02',
        activo: true,
        tipo: 'usuario', // agregado para cumplir interfaz
        credenciales: { // agregado para cumplir interfaz
          usuario: 'anag',
          hashPassword: 'hash456'
        }
      }
    ];

    service.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);
    });

    const req = httpMock.expectOne('http://localhost:8000/beneficiaries');
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsers);
  });
});
