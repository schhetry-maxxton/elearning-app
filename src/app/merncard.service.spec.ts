import { TestBed } from '@angular/core/testing';

import { MerncardService } from './merncard.service';

describe('MerncardService', () => {
  let service: MerncardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MerncardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
