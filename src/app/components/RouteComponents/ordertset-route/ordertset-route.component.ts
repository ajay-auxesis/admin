import { CurrencyType } from 'app/enums/currency-type.enum';
import { LoginModel } from './../../../models/login';
import { AppSettings } from 'app/app-settings';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { OrderServiceService } from './../../../service/OrderService/order-service.service';
import { orderModel, createorderModel, testorderModel, postorderModel } from './../../../models/LTCUSDOrderModel';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';
import { Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { SharedService } from './../../../service/shared.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';



declare var $: any

@Component({
  selector: 'app-ordertset-route',
  templateUrl: './ordertset-route.component.html',
  styleUrls: ['./ordertset-route.component.css']
})
export class OrdertsetRouteComponent implements OnInit {
 order:postorderModel;
maxrecord:any;
_currencyType:CurrencyType;
  OrderFormModel: FormGroup;
  constructor(  private _sharedservice: SharedService,private _createOrder:OrderServiceService,private myElement: ElementRef,  private _http: Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter : HttpEmitterService) { }

  ngOnInit() {
 
this.OrderFormModel =this._fb.group({
 
//CurrencyType: new FormControl('', []),
OrderMode: new FormControl('', []),
//MaxRcord: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
Amount: new FormControl('', [Validators.required]),
Rate: new FormControl('', [Validators.required]),
});

}
submitOrder({ value, valid }: { value:testorderModel, valid:boolean }) {

this.maxrecord=$("#maxrecord").val();
this._currencyType=$("#currency").val();
let bodyString = JSON.stringify(value);
let starttime= new Date();
let endtime:Date;
for(let i=0;i<this.maxrecord;i++ )
   {
    
this. _createOrder.PostsellbuyDeal(value,this._currencyType).debounceTime(1200).subscribe(result =>{ 
this.loaderService.displayLoader(false);
console.log(result);
endtime = new Date(); 
console.log(endtime);
},
error => {
   this.loaderService.displayLoader(false);
    console.log(error); 
    endtime = new Date(); 
    console.log(endtime);
}
);

}
console.log(starttime);

}


}

 //this._createOrder.PostOrder(value).debounceTime(1200).subscribe(result =>{ 
// this.loaderService.displayLoader(false);

// },
// error => {
//    this.loaderService.displayLoader(false);
//       if(error.status==Responsecode.Unauthorized)
//   { 
//  this.erroremitter.unauthorizedError(true);

//  }
//  if(error.status==Responsecode.PaymentRequired)
//   {


//  }
// }
// ); 

//  let headers = new Headers();
//  let login:LoginModel;
// login.UserName="mytest@gmail.com";
// login.Password="123456789";

// let token="";
// this._sharedservice.Login(login).debounceTime(400).subscribe(result =>{
// token=result.json().AccessToken;
// });
 
// headers.append('Authorization', `Basic ${token}`);

// let options = new RequestOptions({ headers: headers });

//       console.log(bodyString);

// if(value.CurrencyType==CurrencyType.BTC)
//    { return this._http.post(`${AppSettings.API_ENDPOINT}BtcInrorder`, bodyString);} 
   
//    if(value.CurrencyType==CurrencyType.ETH) {
//      return this._http.post(`${AppSettings.API_ENDPOINT}EthInrorder`, bodyString);
//    }

//    // this._http.post(`${AppSettings.API_ENDPOINT}RobotDeal`, bodyString,options);