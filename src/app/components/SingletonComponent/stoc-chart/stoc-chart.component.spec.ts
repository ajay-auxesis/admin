/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StocChartComponent } from './stoc-chart.component';

describe('StocChartComponent', () => {
  let component: StocChartComponent;
  let fixture: ComponentFixture<StocChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
