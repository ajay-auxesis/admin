import { DepositModel } from './../../../models/DepositModel';
import { PaymentOperationMode } from 'app/enums/payment-operation-mode.enum';

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

@Input() CurrencyType: CurrencyType;
_mybalance:number=0;
_creditsum:number=0;
_debitsum:number=0;
_total:number=0;
value:number=0;
result:DepositModel;
  constructor(private _currencyService:CurrencyService,private loaderService: LoaderService) { }

  ngOnInit() {
this._creditsum=0;
this._debitsum=0;
this._total=0;
this._currencyService.getrawleadger(this.CurrencyType).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);

  if (result.status==200) {
   result=result.json().RawLeadgerList;
   
   this._mybalance=this.getBalance(result);

  }

// console.log('-------------run----');
// console.log(this._mybalance);
// console.log('-------------run----');
}); 

}

getBalance(val){

  val.forEach(element => {

  if(element.Type==PaymentOperationMode.Credit)
   { 
     this._creditsum+=element.Amount;
   }
   if( element.Type==PaymentOperationMode.Debit)
    {
      this._debitsum+=element.Amount;
    }
      
   });
this._total=this._creditsum-this._debitsum;

  return this._total;

}





  }


