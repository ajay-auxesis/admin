/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StocMarketComponent } from './stoc-market.component';

describe('StocMarketComponent', () => {
  let component: StocMarketComponent;
  let fixture: ComponentFixture<StocMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
