import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementListRouteComponent } from './announcement-list-route.component';

describe('AnnouncementListRouteComponent', () => {
  let component: AnnouncementListRouteComponent;
  let fixture: ComponentFixture<AnnouncementListRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementListRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementListRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
