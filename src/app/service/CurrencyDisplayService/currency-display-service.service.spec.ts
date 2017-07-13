/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CurrencyDisplayServiceService } from './currency-display-service.service';

describe('CurrencyDisplayServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyDisplayServiceService]
    });
  });

  it('should ...', inject([CurrencyDisplayServiceService], (service: CurrencyDisplayServiceService) => {
    expect(service).toBeTruthy();
  }));
});
