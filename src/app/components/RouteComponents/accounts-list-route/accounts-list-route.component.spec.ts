import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsListRouteComponent } from './accounts-list-route.component';

describe('AccountsListRouteComponent', () => {
  let component: AccountsListRouteComponent;
  let fixture: ComponentFixture<AccountsListRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsListRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
