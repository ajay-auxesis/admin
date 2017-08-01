import { GetFeeModel } from './../../models/DepositModel';
import { orderModel } from './../../models/LTCUSDOrderModel';
import { AppSettings } from './../../app-settings';

import { Router } from '@angular/router';
import { LocalStorage, SessionStorage } from "ngx-webstorage";
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class BuyselldealserviceService {
     showLoader = false;
      public _IsAuthenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private http: Http,private _router: Router) {
    }
  PostsellbuyDeal(orderModel: orderModel): Observable<any> {
   
     console.log(orderModel);
      let bodyString = JSON.stringify(orderModel); 
//return this.http.post(`${AppSettings.API_ENDPOINT}LtcUsdoder`, bodyString);
   return this.http.post(`${AppSettings.API_ENDPOINT}BtcInrorder`, bodyString);  
  }

  PostFeeCalculation(feeModel: GetFeeModel): Observable<any> {
   
  
      let bodyString = JSON.stringify(feeModel); 
return this.http.post(`${AppSettings.API_ENDPOINT}orderfee`, bodyString);
    
  }
}
