import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { FeeServiceService } from './../../../service/FeeService/fee-service.service';

import { orderModel } from './../../../models/LTCUSDOrderModel';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SharedService } from './../../../service/shared.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-fee-component',
  templateUrl: './fee-component.component.html',
  styleUrls: ['./fee-component.component.css']
})
export class FeeComponentComponent implements OnInit {
OrderFormModel: FormGroup;

  constructor(private _feeservice:FeeServiceService ,private myElement: ElementRef,  private _http: Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter : HttpEmitterService) { 
   
  }

  ngOnInit() {

this.OrderFormModel =this._fb.group({
 
CurrencyType: new FormControl('', []),
OrderMode: new FormControl('', []),
Rate: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),

});

}
submitOrder({ value, valid }: { value: orderModel, valid: boolean }) {

//console.log(value);

this. _feeservice.PostFee(value).debounceTime(1200).subscribe(result =>{ 
this.loaderService.displayLoader(false);
//console.log(result);
},
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



}
}
