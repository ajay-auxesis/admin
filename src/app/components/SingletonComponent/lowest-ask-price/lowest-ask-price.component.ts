import { OrderMode } from 'app/enums/order-mode.enum';
import { DepositModel } from './../../../models/DepositModel';
import { PaymentOperationMode } from 'app/enums/payment-operation-mode.enum';
import {Responsecode } from 'app/enums/responsecode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from "app/service/CurrencyServices/currency.service";
import { LoaderService } from "app/service/loader-service.service";

@Component({
  selector: 'app-lowest-ask-price',
  templateUrl: './lowest-ask-price.component.html',
  styleUrls: ['./lowest-ask-price.component.css']
})
export class LowestAskPriceComponent implements OnInit {
@Input() CurrencyType: CurrencyType;
@Input()OrderMode : OrderMode;
_lowestPrice:number=0;

  constructor(private _currencyService:CurrencyService,private loaderService: LoaderService) {

   }

  ngOnInit() {
    this._currencyService.getlowestaskedprice(this.CurrencyType,this.OrderMode).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);

  if (result.status==200) {
   this._lowestPrice=result.json().lowestAsk;
   console.log("lowestPrice");
console.log(this._lowestPrice);
}
},
error => {
this.loaderService.displayLoader(false);

}
); 
  }

}
