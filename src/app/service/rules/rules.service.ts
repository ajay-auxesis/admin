import { Injectable } from '@angular/core';
import { AppSettings } from "app/app-settings";
import { Observable } from 'rxjs/Rx';
import { FeeRuleModel } from './../../models/feeRule';
import { TradingRulesModel } from './../../models/tradingRules';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

@Injectable()
export class RulesService {

  constructor(private _http : Http) { }

  postFeeRule(feeRule: FeeRuleModel): Observable<any> {
		  let bodyString = JSON.stringify(feeRule); 
		  return this._http.post(`${AppSettings.API_ENDPOINT}feerule`, bodyString) ;
  }
  postTradingRules(tradingRule: TradingRulesModel): Observable<any> {
		  let bodyString = JSON.stringify(tradingRule); 
		  return this._http.post(`${AppSettings.API_ENDPOINT}trading_rules`, bodyString) ;
  }

  getTradingRules(): Observable<any>{
      return this._http.get(`${AppSettings.API_ENDPOINT}trading_rules`); 
  }
  getFeeRules(): Observable<any>{
      return this._http.get(`${AppSettings.API_ENDPOINT}feerule`); 
  }

}
