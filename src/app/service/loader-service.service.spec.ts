/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoaderServiceService } from './loader-service.service';

describe('LoaderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderServiceService]
    });
  });

  it('should ...', inject([LoaderServiceService], (service: LoaderServiceService) => {
    expect(service).toBeTruthy();
  }));
});
