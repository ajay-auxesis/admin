import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { orderModel } from './../../../models/LTCUSDOrderModel';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FeeServiceService } from './../../../service/FeeService/fee-service.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-show-fee',
  templateUrl: './show-fee.component.html',
  styleUrls: ['./show-fee.component.css']
})
export class ShowFeeComponent implements OnInit {
_feelist:orderModel;
ifEdit:boolean=false;
OrderFormModel: FormGroup;
  constructor(private _feeservice:FeeServiceService ,private myElement: ElementRef ,private _fb: FormBuilder,  private _http: Http,private _router: Router,private loaderService: LoaderService,private erroremitter : HttpEmitterService) { }

  ngOnInit() {

    this.OrderFormModel =this._fb.group({
 
CurrencyType: new FormControl('', []),
OrderMode: new FormControl('', []),
Rate: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),

});

this. _feeservice.GetFee().debounceTime(1200).subscribe(result =>{ 
this.loaderService.displayLoader(false);
//console.log(result);
this._feelist=result.json();
},
error => {
   this.loaderService.displayLoader(false);
      if(error.status==Responsecode.Unauthorized)
  { 
 this.erroremitter.unauthorizedError(true);
 }
 if(error.status==Responsecode.PaymentRequired)
  {

 }
}
); 

  }
  update(){
    this.ngOnInit();
  }
  updateValue(){
    this.ifEdit=true;
  }
submitOrder({ value, valid }: { value: orderModel, valid: boolean }) {
this. _feeservice.PostFee(value).debounceTime(1200).subscribe(result =>{ 
this.loaderService.displayLoader(false);
},
 error => {
this.loaderService.displayLoader(false);
//       if(error.status==Responsecode.Unauthorized)
//   { 
// this.erroremitter.unauthorizedError(true);  
//  }
//  if(error.status==Responsecode.PaymentRequired)
//   {
// this.erroremitter.paymentRequiredError(true);
//  }
 }
 
); 


this.OrderFormModel.reset();
this.ifEdit=false;
this.ngOnInit();

}
}
