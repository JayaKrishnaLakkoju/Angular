import { TestBed } from '@angular/core/testing';

import { SeeService } from './see.service';

describe('SeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeeService = TestBed.get(SeeService);
    expect(service).toBeTruthy();
  });
});
