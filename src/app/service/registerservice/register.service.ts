import { AppSettings } from './../../app-settings';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Registermodel } from './../../models/registermodel';
import { RegisterInterface } from './../../interface/register-interface';
import { Injectable } from '@angular/core';

@Injectable()
export class RegisterService {

  constructor(private http: Http) { }

  PostUser(register: Registermodel): Observable<any> {
    {
      let bodyString = JSON.stringify(register); 
      return this.http.post(`${AppSettings.API_ENDPOINT}user/register`, bodyString) ;
    }
  }
}

