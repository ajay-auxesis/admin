import { RateEmitterService } from './../../../service/Emitters/rate-emitter.service';
import { DynamicOrderRowService } from './dynamic-order-row.service';
import { OrderLisRowComponent } from './../order-lis-row/order-lis-row.component';
import { SignalRService } from './../../../service/HubServices/signal-r.service';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from './../../../app-settings';
import { orderListModel, newRateModel, removematchorderModel } from './../../../models/LTCUSDOrderModel';
import { LoaderService } from 'app/service/loader-service.service';
import { CurrencyRateService } from './../../../service/CurrencyServices/currency-rate.service';
import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input, ChangeDetectorRef, ComponentFactoryResolver, ViewContainerRef, ViewChild, ReflectiveInjector, ContentChild } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Subscription } from "rxjs/Subscription";
@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {
@Input()  _currencyType:CurrencyType;
@Input()  _orderMode: OrderMode;
private timerObserver: Subscription;
 @ViewChild('total') updateVolume: any;
 @ViewChild('orderlistparent', {read: ViewContainerRef})
  orderlistparent: ViewContainerRef;
public _orderlist: Array<orderListModel>;
private orderListModelObject: orderListModel;
private ratechange:Array<removematchorderModel>;
private ratechangetimerObserver: Subscription;
BuyAmount:any=0;SellAmount:any=0;
BuyRate:any=0;SellRate:any=0;
constructor(private _SignalRService: SignalRService,private dynamicOrderRowService: DynamicOrderRowService,private componentFactoryResolver: ComponentFactoryResolver,private cdRef: ChangeDetectorRef,private _http: Http,private _signalRService :SignalRService,private _currencyRateService:CurrencyRateService,private loaderService:LoaderService,private _rateChangeEmitter: RateEmitterService) {

this._orderlist = new Array<orderListModel>();

 
}

private AddNewOrder(orderListModelnew:orderListModel) {

var neworderlist= new  Array<orderListModel>();
neworderlist=this._orderlist;


if(neworderlist!=null){

neworderlist.push(orderListModelnew);

}

this._orderlist=this._SignalRService.sortArry(neworderlist,orderListModelnew,this._orderMode);
// 
this.updateVolume.newVolumeTotal(orderListModelnew);

      }

getRecentListorder(): void {
        this._currencyRateService.GetCurrencyOrderList(this._currencyType,this._orderMode)
            .subscribe(result => { 
       
 this._orderlist=this._SignalRService.sortArry(this._orderlist=result.json()  as  Array<orderListModel>,null,this._orderMode);

            });
    }
  ngOnInit() {
    
   let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{ this._orderlist
      //  console.log(this._orderlist);
        });
this.getRecentListorder();


  this._signalRService.connectionEstablished.subscribe(json => { 
      this.orderListModelObject = json;
     // console.log(this.orderListModelObject);
 var curname:CurrencyType=this._currencyType ;
 var  ordername:OrderMode=this._orderMode;
           if(CurrencyType[this.orderListModelObject.CurrencyType]==curname.toString()  && OrderMode[this.orderListModelObject.OrderMode] ==ordername.toString())
           {
           
if(this._orderlist==null){
this._orderlist=new  Array<orderListModel>();


}

             this.AddNewOrder(this.orderListModelObject);
       
           }
       
  });

this._rateChangeEmitter.whenRateChangeEvent.subscribe(result =>{

  this.ratechange=result.AlterRateList;
//console.log(this.ratechange);
var  ordername:OrderMode=this._orderMode;

if(this.ratechange!=null)
{
this.ratechange.forEach(element => {
   if(element.OrderMode==OrderMode.Buy)
  { 
   this.BuyRate=element.Rate; 
   this.BuyAmount=element.RemainingAmount;
  }
 else if(element.OrderMode==OrderMode.Sell)
  {
    this.SellRate=element.Rate; 
   this.SellAmount=element.RemainingAmount;
   
  }

}); 
}

if(this._orderlist!=null)
{
  this._orderlist.forEach(element => {
  if(element.OrderMode==OrderMode.Sell && element.Rate== this.SellRate)
  { if(this.SellAmount>0)
            {element.Amount=this.SellAmount;console.log('elementchangeSel'); }
       else
         { var index = this._orderlist.indexOf(element);
        this._orderlist.splice(index,1);console.log('elementremoveSel');
      }
      
  }

  else if(element.OrderMode==OrderMode.Buy && element.Rate== this.BuyRate)
  { if(this.BuyAmount>0)
              { element.Amount=this.BuyAmount;console.log('elementchangeBuy'); }
          else
          {
            var index = this._orderlist.indexOf(element);
          this._orderlist.splice(index,1);
          console.log('elementremoveBuy');
        }
       
  }
//console.log(this._orderlist);
});

}

this.updateVolume.ngOnInit();
});






  }
}
