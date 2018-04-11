import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetailRouteComponent } from './account-detail-route.component';

describe('AccountDetailRouteComponent', () => {
  let component: AccountDetailRouteComponent;
  let fixture: ComponentFixture<AccountDetailRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountDetailRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountDetailRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
