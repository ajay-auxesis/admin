import { DepositAmountModel } from './../../../models/DepositModel';
import { createorderModel } from './../../../models/LTCUSDOrderModel';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoaderService } from 'app/service/loader-service.service';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-deposit-form',
  templateUrl: './deposit-form.component.html',
  styleUrls: ['./deposit-form.component.css']
})
export class DepositFormComponent implements OnInit {
DepositFormModel: FormGroup;
  constructor(private myElement: ElementRef,  private _http:Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter : HttpEmitterService) { }

  ngOnInit() {
    this.DepositFormModel =this._fb.group({
 Name:new FormControl('', [Validators.required]),
 Account:new FormControl('', [Validators.required,ValidationmessageserviceService.onlynumber]),
 Description:new FormControl('', [Validators.required]),
 UTR_number:new FormControl('', [Validators.required]),
CurrencyType: new FormControl('', [Validators.required]),
Amount: new FormControl('', [Validators.required,ValidationmessageserviceService.onlynumber]),


});
  }
submitOrder({ value, valid }: { value:DepositAmountModel, valid:boolean }) {



console.log(value);

// this._createOrder.PostOrder(value).debounceTime(1200).subscribe(result =>{ 
// this.loaderService.displayLoader(false);

// },
// error => {
// this.loaderService.displayLoader(false);
//       if(error.status==Responsecode.Unauthorized)
//   { 
// this.erroremitter.unauthorizedError(true);  
//  }
//  if(error.status==Responsecode.PaymentRequired)
//   {
// this.erroremitter.paymentRequiredError(true);
//  }
// }
// ); 


//this.OrderFormModel.reset();



}
}
