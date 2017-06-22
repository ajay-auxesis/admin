import { DepositModel } from './../models/DepositModel';

import { AppSettings } from './../app-settings';
import { Router } from '@angular/router';
import { LocalStorage, SessionStorage } from "ngx-webstorage";
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DepositServiceService {
private balance;
   public _IsAuthenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private http: Http,private _router: Router) {
    }
    getDeposit(): Observable<any>{
        return this.http.get(`${AppSettings.API_ENDPOINT}getrawleadger`).map((res: Response) => res.json());;
    }
    PostDeposit(depositModel: DepositModel): Observable<any> {
        let bodyString = JSON.stringify(depositModel); 
        return this.http.post(`${AppSettings.API_ENDPOINT}deposite`, bodyString);
      
    }

}
