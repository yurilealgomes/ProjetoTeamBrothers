import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndactivityPage } from './endactivity.page';

describe('EndactivityPage', () => {
  let component: EndactivityPage;
  let fixture: ComponentFixture<EndactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndactivityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
