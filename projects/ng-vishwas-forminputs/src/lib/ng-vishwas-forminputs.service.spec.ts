import { TestBed } from '@angular/core/testing';

import { NgVishwasForminputsService } from './ng-vishwas-forminputs.service';

describe('NgVishwasForminputsService', () => {
  let service: NgVishwasForminputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgVishwasForminputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
