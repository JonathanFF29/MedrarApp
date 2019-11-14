import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacunaPage } from './vacuna.page';

describe('VacunaPage', () => {
  let component: VacunaPage;
  let fixture: ComponentFixture<VacunaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacunaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacunaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
