import { TestBed, inject } from '@angular/core/testing';

import { HamburgerNavMenuService } from './hamburger-nav-menu.service';

describe('HamburgerNavMenuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HamburgerNavMenuService]
    });
  });

  it('should be created', inject([HamburgerNavMenuService], (service: HamburgerNavMenuService) => {
    expect(service).toBeTruthy();
  }));
});
