import { OrderMode } from 'app/enums/order-mode.enum';
import { DepositModel } from './../../../models/DepositModel';
import { PaymentOperationMode } from 'app/enums/payment-operation-mode.enum';
import {Responsecode } from 'app/enums/responsecode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from "app/service/CurrencyServices/currency.service";
import { LoaderService } from "app/service/loader-service.service";

@Component({
  selector: 'app-my-currency-balance',
  templateUrl: './my-currency-balance.component.html',
  styleUrls: ['./my-currency-balance.component.css']
})
export class MyCurrencyBalanceComponent implements OnInit {

@Input() _currencyType: CurrencyType;
@Input() _orderMode: OrderMode;
_mybalance:number=0;
_creditsum:number=0;
_debitsum:number=0;
_total:number=0;
value:number=0;
//result:DepositModel;
  constructor(private _currencyService:CurrencyService,private loaderService: LoaderService) {
  
 

   }

  ngOnInit() {


  console.log("CurenncyOrderComponent this._orderMode");
  console.log(this._orderMode);

this._currencyService.getbalance(this._currencyType).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);

  if (result.status==200) {
   this._mybalance=result.json().Balance;
}
},
error => {
 // this.loaderService.displayLoader(false);
//     if(error.status=Responsecode.Unauthorized)
//  {
   
//   console.log('invalid user');
//  }
}
); 

}

// getBalance(val){

//   val.forEach(element => {

//   if(element.Type==PaymentOperationMode.Credit)
//    { 
//      this._creditsum+=element.Amount;
//    }
//    if( element.Type==PaymentOperationMode.Debit)
//     {
//       this._debitsum+=element.Amount;
//     }
      
//    });
// this._total=this._creditsum-this._debitsum;

//   return this._total;

// }





  }


