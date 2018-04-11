import { LoaderService } from 'app/service/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnouncementService } from './../../../service/announcement/announcement.service';
import 'rxjs/Rx';


@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
  styleUrls: ['./announcement-list.component.css']
})
export class AnnouncementListComponent implements OnInit {
  announcementlist:string = '' ;
  constructor(private _announcementService:AnnouncementService,private _router: Router,private loaderService: LoaderService) { }

  ngOnInit() {
  
    this._announcementService.getAnnouncementlist().debounceTime(1200).subscribe(result=>{
      let data = result.json();
       
      this.announcementlist = data;
      this.loaderService.displayLoader(false);
    },
    error => {
        this.loaderService.displayLoader(false);
    });
  }

}
