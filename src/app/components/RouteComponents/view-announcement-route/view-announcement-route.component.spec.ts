import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAnnouncementRouteComponent } from './view-announcement-route.component';

describe('ViewAnnouncementRouteComponent', () => {
  let component: ViewAnnouncementRouteComponent;
  let fixture: ComponentFixture<ViewAnnouncementRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAnnouncementRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAnnouncementRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
