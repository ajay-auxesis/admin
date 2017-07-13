import { DynamicMatchOrderService } from './dynamic-match-order.service';
import { matchorderModel } from './../../../models/LTCUSDOrderModel';
import { Observable } from 'rxjs/Rx';
import { MatchEmitterService } from './../../../service/Emitters/match-emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { MatchOrderService } from './../../../service/OrderServices/match-order.service';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';

import { Component, OnInit, Input, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import {DataTableModule} from "angular2-datatable";

@Component({
  selector: 'app-match-order',
  templateUrl: './match-order.component.html',
  styleUrls: ['./match-order.component.css']
})
export class MatchOrderComponent implements OnInit {

//_matchOrders:any;
//  @ViewChild('someVar') el:ElementRef;
@Input()  _currencyType:CurrencyType;
@Input()  _orderMode: OrderMode;
_Count:any=0;
today=new Date();
private timerObserver: Subscription;
public matchdto: any;
 @ViewChild('matchorderlistparent', {read: ViewContainerRef})
  matchorderlistparent: ViewContainerRef;
public _matchOrders: Array<matchorderModel>;
private matchorderListModelObject: matchorderModel;
previd:any=0;
prevamount:any=0;
  constructor(private _matchEmitterService:MatchEmitterService,private _matchorderservice : MatchOrderService,private loaderService : LoaderService , private erroremitter : HttpEmitterService, private _dynamicmatchorderService : DynamicMatchOrderService,private componentFactoryResolver:ComponentFactoryResolver,private cdRef: ChangeDetectorRef,) { 

this._matchOrders = new Array<matchorderModel>();

      this._matchEmitterService.whenMatchedHappendEvent.subscribe(json => { 
   this.matchdto=json;

   this.AddNewMatchOrder(this.matchdto);
  
  });
   
}


private AddNewMatchOrder(matchorderListModelnew:matchorderModel) {
matchorderListModelnew.CreationDateTime= new Date();


var newmatchorderlist= new  Array<matchorderModel>();
newmatchorderlist=this._matchOrders;

if(newmatchorderlist!=null){

newmatchorderlist.push(matchorderListModelnew);
//this.distinctmatchorder(newmatchorderlist);
}


}
  ngOnInit() {
       let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{ 

 });

   this._matchorderservice.getallmatchorder(this._currencyType,this._orderMode).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);
  if (result.status==200 && result!=null) {

  this._matchOrders = result.json(); 
  if( this._matchOrders !=null)
{this.distinctmatchorder(this._matchOrders);}
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

  distinctmatchorder(distinctmatchorder){
  
 this._matchOrders .forEach(element => {
    if(element.OrderId==this.previd)
    { element.FilledAmount=element.FilledAmount+this.prevamount;}
  this.previd=element.OrderId;
  this.prevamount=element.FilledAmount; 
});

distinctmatchorder.reverse();

var unique =new matchorderModel();
var distinct = [];
    for( var i in distinctmatchorder){
     if( typeof(unique[distinctmatchorder[i].OrderId])=='undefined' ){
      distinct.push(distinctmatchorder[i]);
     }
     unique[distinctmatchorder[i].OrderId]=0;
    }
distinctmatchorder=distinct;
distinctmatchorder.reverse(); 
this._matchOrders=distinctmatchorder;

  }
}






