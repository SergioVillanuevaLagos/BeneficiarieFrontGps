import { UserService } from 'src/app/service/user.service';
import { TestBed } from '@angular/core/testing';


describe('ServiceService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
