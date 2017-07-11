import { Observable } from 'rxjs/Rx';
import { MatchEmitterService } from './../../../service/Emitters/match-emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { MatchOrderService } from './../../../service/OrderServices/match-order.service';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';

import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {DataTableModule} from "angular2-datatable";

@Component({
  selector: 'app-match-order',
  templateUrl: './match-order.component.html',
  styleUrls: ['./match-order.component.css']
})
export class MatchOrderComponent implements OnInit {

_matchOrders:any;
//  @ViewChild('someVar') el:ElementRef;
@Input()  _currencyType:CurrencyType;
@Input()  _orderMode: OrderMode;
_Count:any=0;
private timerObserver: Subscription;
public matchdto: any;
  constructor(private _matchEmitterService:MatchEmitterService,private _matchorderservice : MatchOrderService,private loaderService : LoaderService , private erroremitter : HttpEmitterService) { 

      this._matchEmitterService.whenMatchedHappendEvent.subscribe(json => { 
   this.matchdto=json;
       console.log("from whenMatchedHappendEvent");
       console.log(json);
  });
   
  }
 
  ngOnInit() {
       let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{ 
 });
   this._matchorderservice.getallmatchorder(this._currencyType,this._orderMode).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);
//result.
  if (result.status==200) {
  this._matchOrders = result.json(); 
 
 console.log("this._matchOrders");
 console.log(this._matchOrders);

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
}






