import { TestBed, inject } from '@angular/core/testing';

import { TrajectenDataService } from './trajecten-data.service';

describe('TrajectenDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrajectenDataService]
    });
  });

  it('should be created', inject([TrajectenDataService], (service: TrajectenDataService) => {
    expect(service).toBeTruthy();
  }));
});
