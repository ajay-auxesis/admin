import { Injectable } from '@angular/core';
import { AppSettings } from "app/app-settings";
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

@Injectable()
export class UserListService {

  constructor(private _http : Http) { }

  getUserslist(): Observable<any>{
    return this._http.get(`${AppSettings.API_ENDPOINT}Userlist`); 
  }

  changeUserStatus(email: string): Observable<any> {
    var data = {email:email};
    let bodyString = JSON.stringify(data);
		return this._http.post(`${AppSettings.API_ENDPOINT}Userstatus`, bodyString) ;
  }

}
