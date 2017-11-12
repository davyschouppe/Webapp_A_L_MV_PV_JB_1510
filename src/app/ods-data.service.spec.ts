import { TestBed, inject } from '@angular/core/testing';

import { OdsDataService } from './ods-data.service';

describe('OdsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdsDataService]
    });
  });

  it('should be created', inject([OdsDataService], (service: OdsDataService) => {
    expect(service).toBeTruthy();
  }));
});
