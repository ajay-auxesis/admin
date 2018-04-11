import { Injectable } from '@angular/core';
import { AppSettings } from "app/app-settings";
import { Observable } from 'rxjs/Rx';
import { FeeRuleModel } from './../../models/feeRule';
import { TradingRulesModel } from './../../models/tradingRules';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

@Injectable()
export class OrderService {
 
  constructor(private _http : Http) { }
    getDepositRequest(): Observable<any>{
		return this._http.get(`${AppSettings.API_ENDPOINT}fiatdeposit_request`); 
	 }
	 
    getWithdrawRequest(): Observable<any>{
		return this._http.get(`${AppSettings.API_ENDPOINT}fiatwithdraw_request`); 
	 }

 	changeOrderStatus(orderId: string,status): Observable<any> {
		// /api/Userstatus 
		 var data = {Id:orderId,Status:status};
		 let bodyString = JSON.stringify(data);
		 return this._http.post(`${AppSettings.API_ENDPOINT}Status`, bodyString) ;
		 
	 }
}
