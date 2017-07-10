import { RateEmitterService } from './../../../service/Emitters/rate-emitter.service';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { orderListModel, newRateModel } from './../../../models/LTCUSDOrderModel';
import { SignalRService } from './../../../service/HubServices/signal-r.service';
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
_class:any="animate-down";
_changevalue:any=0;
private timerObserver: Subscription;
private ratechangetimerObserver: Subscription;
private neworder:orderListModel;
private ratechange:newRateModel;

  constructor(private _signalRService:SignalRService,private _rateChangeEmitter: RateEmitterService,private _currencyService:CurrencyService,private loaderService: LoaderService, private erroremitter : HttpEmitterService) {

   this._signalRService.neworderEmitter.subscribe(json => { 
      this.neworder = json;
 var curname:CurrencyType=this.CurrencyType ;
 var  ordername:OrderMode=this.OrderMode;

           if(CurrencyType[this.neworder.CurrencyType]==curname.toString()  && OrderMode[this.neworder.OrderMode] !=ordername.toString())
           {
             this.removeclass();
            this._lowestPrice=this.neworder.Rate;
           
           }
 });

this._rateChangeEmitter.whenRateChangeEvent.subscribe(json =>{

  this.ratechange=json;
   var  ordername:OrderMode=this.OrderMode;
   if(ordername.toString()=='Buy'){
this.removeclass();
            this._lowestPrice=this.ratechange.BuyRate;
   }
if(ordername.toString()=='Sell'){
this.removeclass();
            this._lowestPrice=this.ratechange.SellRate;
   }
});



   }

  ngOnInit() {

  let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{
        
         if(this._changevalue!=this._lowestPrice){
         
          this.addclass();
          this._changevalue=this._lowestPrice;
        }
        
      });

 let ratechangetimer = Observable.interval(100);
        this.ratechangetimerObserver = ratechangetimer.subscribe(() =>{
        
         if(this._changevalue!=this._lowestPrice){
         
          this.addclass();
          this._changevalue=this._lowestPrice;
        }
        
      });


      
    this._currencyService.getlowestaskedprice(this.CurrencyType,this.OrderMode).debounceTime(1200).subscribe( result =>{
    this.loaderService.displayLoader(false);

  if (result.status==200) {
   this._lowestPrice=result.json().lowestAsk;
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

public addclass()
{
this._class="fadeInDown animated animate-down";
 
}
public removeclass()
{
this._class="animate-down";

}
}
