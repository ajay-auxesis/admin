/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RateEmitterService } from './rate-emitter.service';

describe('RateEmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RateEmitterService]
    });
  });

  it('should ...', inject([RateEmitterService], (service: RateEmitterService) => {
    expect(service).toBeTruthy();
  }));
});
