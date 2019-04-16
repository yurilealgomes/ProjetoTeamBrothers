import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraningreleasePage } from './traningrelease.page';

describe('TraningreleasePage', () => {
  let component: TraningreleasePage;
  let fixture: ComponentFixture<TraningreleasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraningreleasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraningreleasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
