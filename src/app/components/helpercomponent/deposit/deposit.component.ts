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
import { resolve } from "q";
import {PaymentOperationMode } from "../../../enums/payment-operation-mode.enum"
@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
@Input() currencytype: CurrencyType;
@Output() btcvalue : EventEmitter<any> = new EventEmitter<any>();

  constructor( private _sharedservice: SharedService, private _http: Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService, private _depositService: DepositServiceService) { }
 Amount:number;
 CurrencyType: CurrencyType;
 value : any;
 depositmodel: FormGroup;
 USDbalance:any=0;
 BTCbalance:any=0;
 USDcredit:any=0;
 USDdebit:any=0;
 BTCcredit:any=0;
 BTCdebit:any=0;
 balance:any;
 
  ngOnInit() 
 
  {
  this.depositmodel =this._fb.group({
Amount: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
});
this.getAmount();
}

onSubmit({value, valid }: { value: DepositModel, valid: boolean }) {
  if(this.currencytype==CurrencyType.USD)   
{value.CurrencyType=CurrencyType.USD;}
 if(this.currencytype==CurrencyType.BTC)   
{value.CurrencyType=CurrencyType.BTC;}
this._depositService.PostDeposit(value).debounceTime(1200).subscribe(result =>{
this.loaderService.displayLoader(false);

}); 
this.depositmodel.reset();
}

getAmount(){ 
this._depositService.getDeposit().debounceTime(1200)
.subscribe((value: RawleadgerDto) => {
  var leadger :RawleadgerDto;
  leadger=value;
  var leadgerlist:Array<RawLeadgerListdto>=leadger.RawLeadgerList;
 
    leadgerlist.forEach(element => {
     
    
       if(element.Currency==CurrencyType.USD && element.Mode==PaymentOperationMode.Credit){
      this.USDcredit += element.Amount;
       }

       if(element.Currency==CurrencyType.USD && element.Mode==PaymentOperationMode.Debit){
      this.USDdebit += element.Amount;
       }

       this.USDbalance=this.USDcredit-this.USDdebit;
    
    
      if(element.Currency==CurrencyType.BTC && element.Mode==PaymentOperationMode.Credit){
      this.BTCcredit += element.Amount;
       }
       if(element.Currency==CurrencyType.BTC &&  element.Mode==PaymentOperationMode.Debit){
      this.BTCdebit += element.Amount;
       }
       this.BTCbalance=this.BTCcredit-this.BTCdebit; 
     
    
    });
    
     if(this.currencytype==CurrencyType.USD)   
{this.balance=this.USDbalance;}
 if(this.currencytype==CurrencyType.BTC)   
{this.balance=this.BTCbalance;}

//this.btcvalue.emit(this.BTCbalance);

 });

this.USDbalance=0;
this.BTCbalance=0;
this.loaderService.displayLoader(false);

}

// getUSDBalance(){

// }
// getUSDCredit(){
  
// }
// getUSDdebit(){
  
// }
// getBTCBalance(){

// }
// getBTCCredit(){
  
// }
// getBTCdebit(){
  
// }

}
