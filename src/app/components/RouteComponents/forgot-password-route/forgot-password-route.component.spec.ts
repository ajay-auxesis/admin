import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordRouteComponent } from './forgot-password-route.component';

describe('ForgotPasswordRouteComponent', () => {
  let component: ForgotPasswordRouteComponent;
  let fixture: ComponentFixture<ForgotPasswordRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
