import { TestBed } from '@angular/core/testing';

import { Hunter } from './hunter';

describe('Hunter', () => {
  let service: Hunter;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hunter);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
