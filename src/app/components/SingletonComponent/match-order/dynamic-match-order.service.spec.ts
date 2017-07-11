/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DynamicMatchOrderService } from './dynamic-match-order.service';

describe('DynamicMatchOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicMatchOrderService]
    });
  });

  it('should ...', inject([DynamicMatchOrderService], (service: DynamicMatchOrderService) => {
    expect(service).toBeTruthy();
  }));
});
