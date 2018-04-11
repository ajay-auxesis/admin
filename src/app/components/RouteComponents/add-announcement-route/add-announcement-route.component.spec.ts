import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnnouncementRouteComponent } from './add-announcement-route.component';

describe('AddAnnouncementRouteComponent', () => {
  let component: AddAnnouncementRouteComponent;
  let fixture: ComponentFixture<AddAnnouncementRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnnouncementRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnnouncementRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
