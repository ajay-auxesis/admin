import { CurrencyType } from 'app/enums/currency-type.enum';
import { AppSettings } from './../../../app-settings';
import { LoaderService } from './../../../service/loader-service.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { SharedService } from './../../../service/shared.service';
import { Component, OnInit, ElementRef, Input, Output,EventEmitter,ViewChild} from '@angular/core';
import { Responsecode } from './../../../enums/responsecode.enum';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormArray } from '@angular/forms';
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
import './../../../service/currency-display.ts';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.css']
})
export class AddCurrencyComponent implements OnInit {

  addcurrencyFormModel: FormGroup;

  constructor(myElement: ElementRef, private _sharedservice: SharedService, private _http: Http,private _fb: FormBuilder,private _router: Router, private loaderService: LoaderService) { }

  ngOnInit() {


    this.addcurrencyFormModel =this._fb.group({

      currencysymbol: new FormControl('', [Validators.required]),
      withdrawalfee : new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      Depositfee: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      min_deposit_limit_per_transaction: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      max_deposit_limit_per_day: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      min_withdraw_limit_per_transaction: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      max_withdraw_limit_per_day: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      min_buy_amount: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      min_sell_amount: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      buy_bid_limit: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      sell_bid_limit: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber,ValidationmessageserviceService.valueCheck,ValidationmessageserviceService.FiatprecisionValidation]),
      File:new FormControl('', [])
   });
    
    }

}
