/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LtcUsdRouteComponent } from './ltc-usd-route.component';

describe('LtcUsdRouteComponent', () => {
  let component: LtcUsdRouteComponent;
  let fixture: ComponentFixture<LtcUsdRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtcUsdRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtcUsdRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
