import { TestBed, async, inject } from '@angular/core/testing';

import { RouteguardGuard } from './routeguard.guard';

describe('RouteguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteguardGuard]
    });
  });

  it('should ...', inject([RouteguardGuard], (guard: RouteguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
