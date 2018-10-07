import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamburgerNavComponent } from './hamburger-nav.component';

describe('HamburgerNavComponent', () => {
  let component: HamburgerNavComponent;
  let fixture: ComponentFixture<HamburgerNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamburgerNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamburgerNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
