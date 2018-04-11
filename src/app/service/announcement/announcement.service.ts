import { Injectable } from '@angular/core';
import { AppSettings } from "app/app-settings";
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { AnnouncementModel } from './../../models/announcement';
@Injectable()
export class AnnouncementService {

  constructor(private _http : Http) { }
 // /api/Announcement
  getAnnouncementlist(): Observable<any>{
     return this._http.get(`${AppSettings.API_ENDPOINT}Announcement`); 
  }
  postAnnouncement(announcement: AnnouncementModel): Observable<any> {
		    let bodyString = JSON.stringify(announcement); 
		    return this._http.post(`${AppSettings.API_ENDPOINT}Announcement`,bodyString) ;
  }
  getAnnouncement(announcementId=null): Observable<any>{
    return this._http.get(`${AppSettings.API_ENDPOINT}Announcement?id=${announcementId}`); 
  }

}
