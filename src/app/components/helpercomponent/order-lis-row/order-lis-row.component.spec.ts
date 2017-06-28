/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OrderLisRowComponent } from './order-lis-row.component';

describe('OrderLisRowComponent', () => {
  let component: OrderLisRowComponent;
  let fixture: ComponentFixture<OrderLisRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderLisRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderLisRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
