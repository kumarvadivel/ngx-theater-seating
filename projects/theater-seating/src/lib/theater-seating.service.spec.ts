import { TestBed } from '@angular/core/testing';

import { TheaterSeatingService } from './theater-seating.service';

describe('TheaterSeatingService', () => {
  let service: TheaterSeatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheaterSeatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
