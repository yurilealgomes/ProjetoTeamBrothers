import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingdaysPage } from './remainingdays.page';

describe('RemainingdaysPage', () => {
  let component: RemainingdaysPage;
  let fixture: ComponentFixture<RemainingdaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingdaysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingdaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
