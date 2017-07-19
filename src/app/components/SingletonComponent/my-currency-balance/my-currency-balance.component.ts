import { Observable } from 'rxjs/Observable';
import { matchorderModel } from './../../../models/LTCUSDOrderModel';
import { Subscription } from 'rxjs/Subscription';
import { MatchEmitterService } from './../../../service/Emitters/match-emitter.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { OrderMode } from 'app/enums/order-mode.enum';
import { DepositModel } from './../../../models/DepositModel';
import { PaymentOperationMode } from 'app/enums/payment-operation-mode.enum';
import {Responsecode } from 'app/enums/responsecode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from "app/service/CurrencyServices/currency.service";
import { LoaderService } from "app/service/loader-service.service";
import { Output,EventEmitter} from '@angular/core';

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
private timerObserver: Subscription;
private balancechange:matchorderModel;
  constructor(private _currencyService:CurrencyService,private loaderService: LoaderService,private erroremitter: HttpEmitterService,private _matchOrderEmitter:MatchEmitterService) {


this._matchOrderEmitter.whenMatchedHappendEvent.subscribe(json =>{

  this.balancechange=json;
 
   var  ordername:OrderMode=this._orderMode;
   if(OrderMode[this.balancechange.OrderMode] !=ordername.toString() && this.balancechange.OrderMode==OrderMode.Sell){
     
            this._mybalance+=this.balancechange.FilledAmount*this.balancechange.Rate;
            
   }
     if(OrderMode[this.balancechange.OrderMode] !=ordername.toString() && this.balancechange.OrderMode==OrderMode.Buy){
     
            this._mybalance+=this.balancechange.FilledAmount;
            
   }
//this.ngOnInit();
});



   }

  ngOnInit() {

  let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{
        this._mybalance
        
      });


this._currencyService.getbalance(this._currencyType).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);

  if (result.status==200) {
   this._mybalance=result.json().Balance;
//console.log(result);

}


} ,
error => {
   this.loaderService.displayLoader(false);
      if(error.status==Responsecode.Unauthorized)
  {
  
this.erroremitter.unauthorizedError(true);
   
 }

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


