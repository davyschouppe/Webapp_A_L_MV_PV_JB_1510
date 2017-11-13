import { TestBed, inject } from '@angular/core/testing';

import { AfsprakenDataServiceService } from './afspraken-data-service.service';

describe('AfsprakenDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AfsprakenDataServiceService]
    });
  });

  it('should be created', inject([AfsprakenDataServiceService], (service: AfsprakenDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
