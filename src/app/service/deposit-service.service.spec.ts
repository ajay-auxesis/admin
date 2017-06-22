/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DepositServiceService } from './deposit-service.service';

describe('DepositServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepositServiceService]
    });
  });

  it('should ...', inject([DepositServiceService], (service: DepositServiceService) => {
    expect(service).toBeTruthy();
  }));
});
