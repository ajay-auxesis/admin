import { RequestOptions, Headers } from '@angular/http';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { AppSettings } from 'app/app-settings';
import { Observable } from 'rxjs/Observable';
import { orderModel, createorderModel } from './../../models/LTCUSDOrderModel';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderServiceService {

  showLoader = false;
      public _IsAuthenticated:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private http:Http,private _router: Router) {
    }
  PostOrder(orderModel: createorderModel): Observable<any> {

      let bodyString = JSON.stringify(orderModel); 
       return this.http.post(`${AppSettings.API_ENDPOINT}RobotDeal`, bodyString);
   }

  PostsellbuyDeal(orderModel: orderModel,currencyType: CurrencyType): Observable<any> {

        let bodyString = JSON.stringify(orderModel); 
     
        if(CurrencyType[currencyType]==CurrencyType.BTC.toString())
        {
          return this.http.post(`${AppSettings.API_ENDPOINT}BtcInrorder`, bodyString);
        } 
        if(CurrencyType[currencyType]==CurrencyType.ETH.toString()) {
            return this.http.post(`${AppSettings.API_ENDPOINT}EthInrorder`, bodyString);
        }

  }

}
