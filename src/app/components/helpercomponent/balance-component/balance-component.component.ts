import { LoaderComponent } from './../../../loader/loader.component';
import { AmountBalanceDirective } from './../../../Directives/amount-balance.directive';
import { DepositModel, RawleadgerDto, RawLeadgerListdto } from './../../../models/DepositModel';
import { TradingHistoryComponent } from './../../helpercomponent/trading-history/trading-history.component';
import { CurrentActiveOrdersComponent } from './../../helpercomponent/current-active-orders/current-active-orders.component';

import { BuyselldealserviceService } from './../../../service/sellbuyservice/buyselldealservice.service';
import { AppSettings } from './../../../app-settings';
import { LoaderService } from './../../../service/loader-service.service';
import { LoginModel, tokenrespone } from './../../../models/login';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { RegisterService } from './../../../service/registerservice/register.service';
import { SharedService } from './../../../service/shared.service';
import { Responsecode } from './../../../enums/responsecode.enum';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
import { RegisterInterface } from './../../../interface/register-interface';
import { RegisterComponent } from './../../../register/register.component';
import { Registermodel} from './../../../models/registermodel';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { LocalStorage, SessionStorage } from 'ngx-webstorage';
import { SafeHtml } from "@angular/platform-browser";
import { UserType } from "../../../enums/user-type.enum";
import { NgFor } from "@angular/common";
import { DepositServiceService } from './../../../service/deposit-service.service';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { CurrencyType } from "../../../enums/currency-type.enum";
import { PaymentOperationMode } from "../../../enums/payment-operation-mode.enum";
@Component({
  selector: 'app-balance-component',
  templateUrl: './balance-component.component.html',
  styleUrls: ['./balance-component.component.css']
})
export class BalanceComponentComponent implements OnInit {

  constructor(private _sharedservice: SharedService, private _http: Http,private _router: Router,private loaderService: LoaderService, private _depositService: DepositServiceService) { }
Amount:number;
 CurrencyType: CurrencyType;
 _value : number;
 _usdbalance:number=0;
 _btcbalance:number=0;
 _usdcredit:number=0;
 _usddebit:number=0;
 _btccredit:number=0;
 _btcdebit:number=0;
 _balance:number;
  ngOnInit() {

    this._depositService.getDeposit().debounceTime(1200)
.subscribe((value: RawleadgerDto) => {
  var leadger :RawleadgerDto;
  leadger=value;
  var leadgerlist:Array<RawLeadgerListdto>=leadger.RawLeadgerList;
 
    leadgerlist.forEach(element => {
     
       if(element.Currency==CurrencyType.USD && element.Mode==PaymentOperationMode.Credit){
      this._usdcredit += element.Amount;
       }

       if(element.Currency==CurrencyType.USD && element.Mode==PaymentOperationMode.Debit){
      this._usddebit += element.Amount;
       }

       this._usdbalance=this._usdcredit-this._usddebit;
    
    
      // if(element.Currency==CurrencyType.BTC && element.Mode==PaymentOperationMode.Credit){
      // this.BTCcredit += element.Amount;
      //  }
      //  if(element.Currency==CurrencyType.BTC &&  element.Mode==PaymentOperationMode.Debit){
      // this.BTCdebit += element.Amount;
      //  }
      //  this.BTCbalance=this.BTCcredit-this.BTCdebit; 
     
    
    });
    
//      if(this.currencytype=='USD')   
// {this.balance=this.USDbalance;}
//  if(this.currencytype=='BTC')   
// {this.balance=this.BTCbalance;}

//this.btcvalue.emit(this.BTCbalance);

 });

this._usdbalance=0;
this._btcbalance=0;
this.loaderService.displayLoader(false);

  }

}
