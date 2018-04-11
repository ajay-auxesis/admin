/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FeeServiceService } from './fee-service.service';

describe('FeeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeeServiceService]
    });
  });

  it('should ...', inject([FeeServiceService], (service: FeeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
