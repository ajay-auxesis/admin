/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExcelExportService } from './excel-export.service';

describe('ExcelExportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcelExportService]
    });
  });

  it('should ...', inject([ExcelExportService], (service: ExcelExportService) => {
    expect(service).toBeTruthy();
  }));
});
