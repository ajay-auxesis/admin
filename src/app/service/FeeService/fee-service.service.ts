import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { AppSettings } from 'app/app-settings';
import { Observable } from 'rxjs/Observable';
import { orderModel } from './../../models/LTCUSDOrderModel';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class FeeServiceService {

 showLoader = false;
  public _IsAuthenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http: Http,private _router: Router) {
    }
  PostFee(orderModel: orderModel): Observable<any> {

      let bodyString = JSON.stringify(orderModel); 

     return this.http.post(`${AppSettings.API_ENDPOINT}Fee`, bodyString);
   }

 GetFee(): Observable<any>{
   return this.http.get(`${AppSettings.API_ENDPOINT}Fee`);
 }

GetFeeByCurrency(currencyType:CurrencyType,orderMode:OrderMode): Observable<any>{
   return this.http.get(`${AppSettings.API_ENDPOINT}Fee?CurrencyType=${currencyType}&OrderMode=${orderMode}`);
 }

}
