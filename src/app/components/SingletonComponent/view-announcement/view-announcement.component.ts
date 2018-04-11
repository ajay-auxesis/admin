import { LoaderService } from 'app/service/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from './../../../service/announcement/announcement.service';

@Component({
  selector: 'app-view-announcement',
  templateUrl: './view-announcement.component.html',
  styleUrls: ['./view-announcement.component.css']
})
export class ViewAnnouncementComponent implements OnInit {
  announcement:string = '' ;
  constructor(private _announcementService:AnnouncementService,private _router: Router,private loaderService: LoaderService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    let params: any = this.activatedRoute.snapshot.params;
		var announcementId = params.id ;
    this._announcementService.getAnnouncement(announcementId).debounceTime(1200).subscribe(result=>{
      let data = result.json();
      this.announcement = data;
      this.loaderService.displayLoader(false);
    },
    error => {
        this.loaderService.displayLoader(false);
    });
  }

}
