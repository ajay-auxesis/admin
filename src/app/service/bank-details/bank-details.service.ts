import { Injectable } from '@angular/core';
import { AppSettings } from "app/app-settings";
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

@Injectable()
export class BankDetailsService {

  constructor(private _http : Http) { }

   getUsersList(): Observable<any>{
		  return this._http.get(`${AppSettings.API_ENDPOINT}BankDetails`); 
   }
   getAccountDetail(email=null): Observable<any>{
      return this._http.get(`${AppSettings.API_ENDPOINT}BankDetails?email=${email}`); 
   }

}
