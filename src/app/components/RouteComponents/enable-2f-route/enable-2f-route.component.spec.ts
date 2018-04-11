/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Enable2fRouteComponent } from './enable-2f-route.component';

describe('Enable2fRouteComponent', () => {
  let component: Enable2fRouteComponent;
  let fixture: ComponentFixture<Enable2fRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Enable2fRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Enable2fRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
