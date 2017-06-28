import { OrderMode } from 'app/enums/order-mode.enum';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Injectable } from '@angular/core';
import { AppSettings } from "app/app-settings";

@Injectable()
export class CurrencyService {

  constructor(private _http:Http) { }

  getcurrencyvolume(currencyType: CurrencyType , orderType:OrderMode) : Observable<any>{
    return this._http.get(`${AppSettings.API_ENDPOINT}volume?CurrencyType=${currencyType}&OrderMode=${orderType}`);
  }

  getlowestaskedprice(currencyType: CurrencyType , orderType:OrderMode) : Observable<any>{

    return this._http.get(`${AppSettings.API_ENDPOINT}asklowest?CurrencyType=${currencyType}&OrderMode=${orderType}`);

  }
    getrawleadger(currencyType: CurrencyType): Observable<any> 
    {
    return this._http.get(`${AppSettings.API_ENDPOINT}getrawleadger?currencyType=${currencyType}`);
    }
   
  getbalance(currencyType: CurrencyType): Observable<any> 
  {
    return this._http.get(`${AppSettings.API_ENDPOINT}getbalance?currencyType=${currencyType}`);
  }
   getAllrawleadger(currencyType: CurrencyType): Observable<any> 
    {
    return this._http.get(`${AppSettings.API_ENDPOINT}getrawleadger`);
    }
   
    getAllbalance(currencyType: CurrencyType): Observable<any> 
    {
    return this._http.get(`${AppSettings.API_ENDPOINT}getbalance`);
    }



}
