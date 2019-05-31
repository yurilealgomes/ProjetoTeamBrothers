import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndofactivityPage } from './endofactivity.page';

describe('EndofactivityPage', () => {
  let component: EndofactivityPage;
  let fixture: ComponentFixture<EndofactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndofactivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndofactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
