import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrencyRouteComponent } from './add-currency-route.component';

describe('AddCurrencyRouteComponent', () => {
  let component: AddCurrencyRouteComponent;
  let fixture: ComponentFixture<AddCurrencyRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCurrencyRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrencyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
