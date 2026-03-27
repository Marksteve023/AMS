import { TestBed } from '@angular/core/testing';

import { AmsApiService } from './ams-api.service';

describe('AmsApiService', () => {
  let service: AmsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
