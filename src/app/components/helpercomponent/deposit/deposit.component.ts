import { PaymentOperationMode } from 'app/enums/payment-operation-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { LoaderComponent } from './../../../loader/loader.component';
import { AmountBalanceDirective } from './../../../Directives/amount-balance.directive';
import { DepositModel, RawleadgerDto, RawLeadgerListdto } from './../../../models/DepositModel';
import { TradingHistoryComponent } from './../../helpercomponent/trading-history/trading-history.component';
import { CurrentActiveOrdersComponent } from './../../helpercomponent/current-active-orders/current-active-orders.component';
import { SellOrderComponent } from './../../helpercomponent/sell-order/sell-order.component';
import { BuyOrderComponent } from './../../helpercomponent/buy-order/buy-order.component';
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

import { resolve } from "q";


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
@Input() currencytype: string;
@Output() ledgerbalance : EventEmitter<any> = new EventEmitter<any>();
  constructor( private _sharedservice: SharedService, private _http: Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService, private _depositService: DepositServiceService) { }
 Amount:number;
 CurrencyType: CurrencyType;
 value : any;
 depositmodel: FormGroup;
 USDbalance:any;
 BTCbalance:any;
  ngOnInit() 
  {
  this.depositmodel =this._fb.group({

Amount: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),

});
this.getAmount();
}
onSubmit({value, valid }: { value: DepositModel, valid: boolean }) {

// console.log("check");
value.CurrencyType=CurrencyType.USD;


// console.log(value);
this._depositService.PostDeposit(value).debounceTime(1200).subscribe(result =>{
this.loaderService.displayLoader(false);
console.log(result);
}); 
this.depositmodel.reset();

}

getAmount(){ 
this._depositService.getDeposit().debounceTime(1200)
.subscribe((value: RawleadgerDto) => {

  var leadger :RawleadgerDto;
  leadger=value;

  var leadgerlist:Array<RawLeadgerListdto>=leadger.RawLeadgerList;
    console.log(leadgerlist);
    leadgerlist.forEach(element => {
      console.log(element);
     if(element.Type==PaymentOperationMode.Credit){
      this.USDbalance += element.Amount; 
      }
      if(element.Type==PaymentOperationMode.Debit){
      this.BTCbalance += element.Amount; 
      }
     console.log(this.BTCbalance);
     console.log()
     console.log(this.USDbalance);
    });
});


// this.ledgerbalance.emit(a);



//       });


this.loaderService.displayLoader(false);
}

}
