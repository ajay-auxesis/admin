import { Subscription } from 'rxjs/Subscription';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { GetFeeModel } from './../../../models/DepositModel';
import { orderModel } from './../../../models/LTCUSDOrderModel';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { TradingHistoryComponent } from './../../helpercomponent/trading-history/trading-history.component';
import { CurrentActiveOrdersComponent } from './../../helpercomponent/current-active-orders/current-active-orders.component';
import { BuyselldealserviceService } from './../../../service/sellbuyservice/buyselldealservice.service';
import { AppSettings } from './../../../app-settings';
import { LoaderService } from './../../../service/loader-service.service';
import { LoginModel, tokenrespone } from './../../../models/login';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { RegisterService } from './../../../service/registerservice/register.service';
import { SharedService } from './../../../service/shared.service';
import { Component, OnInit, ElementRef, Input, Output,EventEmitter,ViewChild} from '@angular/core';
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
import { OrderMode } from "../../../enums/order-mode.enum";
import { NgFor } from "@angular/common";

@Component({
  selector: 'app-curenncy-order',
  templateUrl: './curenncy-order.component.html',
  styleUrls: ['./curenncy-order.component.css']
})
export class CurenncyOrderComponent implements OnInit {
@Input()  _currencyType:CurrencyType;
@Input()  _orderMode: OrderMode;

@ViewChild('f') child: any;

OrderFormModel: FormGroup;
_total:number=0;
fee : GetFeeModel;
_totalfee:number;


constructor(myElement: ElementRef, private _sharedservice: SharedService, private _http: Http,private _fb: FormBuilder,private _registerservice: RegisterService,private _router: Router, private _buyselldealservice : BuyselldealserviceService,private loaderService: LoaderService,public erroremitter: HttpEmitterService) {

     
}
ngOnInit() {


this.OrderFormModel =this._fb.group({
 
Amount: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
Rate: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
});

}
submitOrder({ value, valid }: { value: orderModel, valid: boolean }) {

value.OrderMode=this._orderMode;

this._buyselldealservice.PostsellbuyDeal(value).debounceTime(1200).subscribe(result =>{
  //console.log(result);
this.loaderService.displayLoader(false);
this.child.ngOnInit();

}
 ,
error => {
   this.loaderService.displayLoader(false);
      if(error.status==Responsecode.Unauthorized)
  {
  
this.erroremitter.unauthorizedError(true);
   
 }
 if(error.status==Responsecode.PaymentRequired)
  {
  
this.erroremitter.paymentRequiredError(true);

   
 }

}
); 
this.OrderFormModel.reset();
this._total=0.00;
this._totalfee=0;
}

getTotal(){
 let _amount = this.OrderFormModel.controls['Amount'].value;
 let _rate = this.OrderFormModel.controls['Rate'].value;
  this._total = _amount*_rate;   
}

getFee(){
  
this.fee=new GetFeeModel();
  
this.fee.Amount = this.OrderFormModel.controls['Amount'].value;
this.fee.OrderMode = this._orderMode;
this.fee.fromCurrency=this._currencyType;
this.fee.ToCurrency=CurrencyType.USD;

this._buyselldealservice.PostFeeCalculation(this.fee).debounceTime(1200).subscribe(res =>{
this.loaderService.displayLoader(false);

this._totalfee=res.json().Fee;
 }
 ,
error => {
   this.loaderService.displayLoader(false);
      if(error.status==Responsecode.Unauthorized)
  {
  
this.erroremitter.unauthorizedError(true);
   
 }

}
);

}

}