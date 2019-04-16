import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LembretePage } from './lembrete.page';

describe('LembretePage', () => {
  let component: LembretePage;
  let fixture: ComponentFixture<LembretePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LembretePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LembretePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
