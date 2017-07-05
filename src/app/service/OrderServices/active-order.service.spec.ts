/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActiveOrderService } from './active-order.service';

describe('ActiveOrderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveOrderService]
    });
  });

  it('should ...', inject([ActiveOrderService], (service: ActiveOrderService) => {
    expect(service).toBeTruthy();
  }));
});
