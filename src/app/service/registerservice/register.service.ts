import { AppSettings } from './../../app-settings';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Registermodel } from './../../models/registermodel';
import { RegisterInterface } from './../../interface/register-interface';
import { Injectable } from '@angular/core';
import { UserType } from './../../enums/user-type.enum';

@Injectable()
export class RegisterService {


  
  constructor(private http: Http) { }


  PostUser(register: Registermodel): Observable<any> {
    {
      let bodyString = JSON.stringify(register); 
      
      
let headers = new Headers({'Content-Type': 'application/json; charset=utf-8' }); 
let options = new RequestOptions({ headers: headers }); 
return this.http.post(`${AppSettings.API_ENDPOINT}user/register`, bodyString,options) ;
    
    }
  }
}

