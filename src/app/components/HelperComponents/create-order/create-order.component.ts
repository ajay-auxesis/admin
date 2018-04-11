import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { OrderServiceService } from './../../../service/OrderService/order-service.service';
import { orderModel, createorderModel } from './../../../models/LTCUSDOrderModel';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SharedService } from './../../../service/shared.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';



declare var $: any
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
_rateRange:any;
_amountRange:any;
_rateFrom:any=0;
_rateTo:any=0;
_amountFrom:any=0;
_amountTo:any=0;
_progress:any=0;
  OrderFormModel: FormGroup;
  constructor( private _createOrder:OrderServiceService,private myElement: ElementRef,  private _http: Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter : HttpEmitterService) { }

  ngOnInit() {
 
this.OrderFormModel =this._fb.group({
 
CurrencyType: new FormControl('', []),
OrderMode: new FormControl('', []),
MaxRcord: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),

});

 this._rateRange=$("#raterange");
 
 this._rateRange.ionRangeSlider({
    type: "double",
    min: 0,
    max: 20,
    from:0,
    to: 20,
    step:0.1,
    onStart: this.updateInputsrate,
    onChange: this.updateInputsrate,
    onFinish: this.updateInputsrate
});

this._amountRange=$("#amountrange");
 
 this._amountRange.ionRangeSlider({
    type: "double",
    min: 0,
    max: 20,
    from: 0,
    to:20,
    step:0.1,
    onStart: this.updateInputsamount,
    onChange: this.updateInputsamount,
    onFinish: this.updateInputsamount
});



}
submitOrder({ value, valid }: { value:createorderModel, valid:boolean }) {

value.MinAmountrange=this._amountRange.data().from;
value.MaxAmountrange=this._amountRange.data().to;
value.MinRaterange=this._rateRange.data().from;
value.MaxRaterange=this._rateRange.data().to;

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


this.OrderFormModel.reset();



}
updateInputsrate (data) {
    this._rateFrom =  data.from;
   this._rateTo= data.to;
   console.log(this._rateFrom,this._rateTo);
}
 updateInputsamount (data) {
    this._amountFrom =  data.from;
   this._amountTo= data.to;
   console.log(this._amountFrom,this._amountTo);
}

}
