import { TestBed } from '@angular/core/testing';

import { RpdService } from './rpd.service';

describe('RpdService', () => {
  let service: RpdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RpdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
