
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
import { Component, OnInit, ElementRef, Input, Output,EventEmitter} from '@angular/core';
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

OrderFormModel: FormGroup;


constructor(myElement: ElementRef, private _sharedservice: SharedService, private _http: Http,private _fb: FormBuilder,private _registerservice: RegisterService,private _router: Router, private _buyselldealservice : BuyselldealserviceService,private loaderService: LoaderService) {


}
ngOnInit() {
this.OrderFormModel =this._fb.group({
Amount: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
Rate: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
});

}
submitOrder({ value, valid }: { value: orderModel, valid: boolean }) {



//this._orderMode==OrderMode.Sell? value.OrderMode==OrderMode.Sell : value.OrderMode==OrderMode.Buy;
value.OrderMode=this._orderMode;
this._buyselldealservice.PostsellbuyDeal(value).debounceTime(1200).subscribe(result =>{
this.loaderService.displayLoader(false);


}); 
this.OrderFormModel.reset();
}

}