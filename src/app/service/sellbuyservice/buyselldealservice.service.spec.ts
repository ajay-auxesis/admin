/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuyselldealserviceService } from './buyselldealservice.service';

describe('BuyselldealserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuyselldealserviceService]
    });
  });

  it('should ...', inject([BuyselldealserviceService], (service: BuyselldealserviceService) => {
    expect(service).toBeTruthy();
  }));
});
