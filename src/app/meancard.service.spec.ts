import { TestBed } from '@angular/core/testing';

import { MeancardService } from './meancard.service';

describe('MeancardService', () => {
  let service: MeancardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeancardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
