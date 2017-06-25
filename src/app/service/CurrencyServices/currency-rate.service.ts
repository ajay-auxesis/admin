import { OrderMode } from 'app/enums/order-mode.enum';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from './../../app-settings';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyRateService {

 constructor(private _http:Http) { }

   GetCurrencyOrderList(currencyType: CurrencyType,orderType:OrderMode): Observable<any> 
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
