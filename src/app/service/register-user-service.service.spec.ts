import { TestBed } from '@angular/core/testing';

import { RegisterUserServiceService } from './register-client.service';

describe('RegisterUserServiceService', () => {
  let service: RegisterUserServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterUserServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
