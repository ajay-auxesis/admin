/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DynamicOrderRowService } from './dynamic-order-row.service';

describe('DynamicOrderRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DynamicOrderRowService]
    });
  });

  it('should ...', inject([DynamicOrderRowService], (service: DynamicOrderRowService) => {
    expect(service).toBeTruthy();
  }));
});
