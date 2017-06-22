/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EhtereumComponent } from './ehtereum.component';

describe('EhtereumComponent', () => {
  let component: EhtereumComponent;
  let fixture: ComponentFixture<EhtereumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhtereumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhtereumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
