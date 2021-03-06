import { LoaderService } from './loader-service.service';
import { Router } from '@angular/router';
import { LocalStorageService} from 'ngx-webstorage';
import { LoginModel } from './../models/login';
import { AppSettings } from './../app-settings';

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class SharedService {
     
    showLoader = false;
    public _IsAuthenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private http: Http,private _router: Router, private loaderservice: LoaderService) {
    }
   
    IsAuthenticated() {
        if (localStorage.getItem(AppSettings.localtokenkey)!=null) {
            this._IsAuthenticated.next(true);
        } else{
            this.loaderservice.displayLoader(false);
            this._IsAuthenticated.next(false);
        }
     }
 logout() {
        this.loaderservice.displayLoader(true);
        localStorage.removeItem(AppSettings.localtokenkey);
        localStorage.removeItem('username');
        this.IsAuthenticated();
        this.loaderservice.displayLoader(false);
        this._router.navigate(['']);
    }

 Login(login:LoginModel): Observable<Response> {
      // console.log(login);
        return this.http.post(`${AppSettings.API_ENDPOINT}token`,login);
            
    }

}
