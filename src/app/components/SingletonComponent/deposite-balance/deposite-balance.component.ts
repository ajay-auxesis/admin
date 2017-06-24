import { MyCurrencyBalanceComponent } from './../my-currency-balance/my-currency-balance.component';
import { DepositModel } from './../../../models/DepositModel';
import { DepositServiceService } from './../../../service/deposit-service.service';
import { LoaderService } from './../../../service/loader-service.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SharedService } from './../../../service/shared.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input,ViewChild } from '@angular/core';
@Component({
  selector: 'app-deposite-balance',
  templateUrl: './deposite-balance.component.html',
  styleUrls: ['./deposite-balance.component.css']
})
export class DepositeBalanceComponent implements OnInit {
@Input() currencytype: CurrencyType;
depositmodel: FormGroup;
 
constructor( private _sharedservice: SharedService, private _http: Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService, private _depositService: DepositServiceService) {
 
 }
  ngOnInit() {
    this.depositmodel =this._fb.group({
     Amount: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
     
});

  }
onSubmit({value, valid }: { value: DepositModel, valid: boolean }) {
value.CurrencyType=this.currencytype;

 this._depositService.PostDeposit(value).debounceTime(1200).subscribe(result =>{
 this.loaderService.displayLoader(false);
 
 }); 
this.depositmodel.reset();
//this.f.ngOnInit();
}
}
