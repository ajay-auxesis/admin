/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MatchOrderService } from './match-order.service';

describe('MatchOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatchOrderService]
    });
  });

  it('should ...', inject([MatchOrderService], (service: MatchOrderService) => {
    expect(service).toBeTruthy();
  }));
});
