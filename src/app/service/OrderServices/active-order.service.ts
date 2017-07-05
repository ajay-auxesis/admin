import { Injectable } from '@angular/core';
import { AppSettings } from "app/app-settings";
import { OrderMode } from 'app/enums/order-mode.enum';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CurrencyType } from 'app/enums/currency-type.enum';

@Injectable()
export class ActiveOrderService {

  constructor(private _http : Http) { }

 getallactiveorder(currencyType: CurrencyType , orderType:OrderMode) : Observable<any>{
    return this._http.get(`${AppSettings.API_ENDPOINT}recentorder`);
  }

// getactiveorder(currencyType: CurrencyType , orderType:OrderMode) : Observable<any>{
//     return this._http.get(`${AppSettings.API_ENDPOINT}recentorder?CurrencyType=${currencyType}&OrderMode=${orderType}`);
//   }

}
