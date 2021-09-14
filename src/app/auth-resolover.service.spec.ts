import { TestBed } from '@angular/core/testing';

import { AuthResoloverService } from './auth-resolover.service';

describe('AuthResoloverService', () => {
  let service: AuthResoloverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthResoloverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
