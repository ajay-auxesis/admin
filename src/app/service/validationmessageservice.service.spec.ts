/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ValidationmessageserviceService } from './validationmessageservice.service';

describe('ValidationmessageserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationmessageserviceService]
    });
  });

  it('should ...', inject([ValidationmessageserviceService], (service: ValidationmessageserviceService) => {
    expect(service).toBeTruthy();
  }));
});
