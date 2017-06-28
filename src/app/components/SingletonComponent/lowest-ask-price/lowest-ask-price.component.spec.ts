/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LowestAskPriceComponent } from './lowest-ask-price.component';

describe('LowestAskPriceComponent', () => {
  let component: LowestAskPriceComponent;
  let fixture: ComponentFixture<LowestAskPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LowestAskPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LowestAskPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
