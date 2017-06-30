import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { orderListModel } from './../../../models/LTCUSDOrderModel';
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
_class:any;
private timerObserver: Subscription;
private neworder:orderListModel;
  constructor(private _signalRService:SignalRService,private _currencyService:CurrencyService,private loaderService: LoaderService) {

   this._signalRService.neworderEmitter.subscribe(json => { 
      console.log("this._signalRService.neworderEmitter");
     console.log(json);

      this.neworder = json;
 var curname:CurrencyType=this.CurrencyType ;
 var  ordername:OrderMode=this.OrderMode;

           if(CurrencyType[this.neworder.CurrencyType]==curname.toString()  && OrderMode[this.neworder.OrderMode] !=ordername.toString())
           {
            this._lowestPrice=this.neworder.Rate;
       
           }

 
  });
   }

  ngOnInit() {

  let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{ this._lowestPrice
        });
    this._currencyService.getlowestaskedprice(this.CurrencyType,this.OrderMode).debounceTime(1200).subscribe( result =>{
    this.loaderService.displayLoader(false);

  if (result.status==200) {
   this._lowestPrice=result.json().lowestAsk;
    }
    },
    error => {
    this.loaderService.displayLoader(false);

    }
    ); 
  }

}
