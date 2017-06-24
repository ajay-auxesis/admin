/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConnectionResolverService } from './connection-resolver.service';

describe('ConnectionResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectionResolverService]
    });
  });

  it('should ...', inject([ConnectionResolverService], (service: ConnectionResolverService) => {
    expect(service).toBeTruthy();
  }));
});
