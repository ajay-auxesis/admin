/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpEmitterService } from './http-emitter.service';

describe('HttpEmitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpEmitterService]
    });
  });

  it('should ...', inject([HttpEmitterService], (service: HttpEmitterService) => {
    expect(service).toBeTruthy();
  }));
});
