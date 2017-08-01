/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TableExportServiceService } from './table-export-service.service';

describe('TableExportServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableExportServiceService]
    });
  });

  it('should ...', inject([TableExportServiceService], (service: TableExportServiceService) => {
    expect(service).toBeTruthy();
  }));
});
