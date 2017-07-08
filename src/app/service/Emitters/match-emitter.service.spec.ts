/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatchEmitterService } from './match-emitter.service';

describe('MatchEmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchEmitterService]
    });
  });

  it('should ...', inject([MatchEmitterService], (service: MatchEmitterService) => {
    expect(service).toBeTruthy();
  }));
});
