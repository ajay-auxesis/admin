import { SignalRService } from './../../../service/HubServices/signal-r.service';
import { Observable } from 'rxjs/Rx';
import { AppSettings } from './../../../app-settings';
import { orderListModel } from './../../../models/LTCUSDOrderModel';
import { LoaderService } from 'app/service/loader-service.service';
import { CurrencyRateService } from './../../../service/CurrencyServices/currency-rate.service';
import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
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

public _orderlist:  Array<orderListModel>;private orderListModelObject: orderListModel;
constructor(private cdRef: ChangeDetectorRef,private _http: Http,private _signalRService :SignalRService,private _currencyRateService:CurrencyRateService,private loaderService:LoaderService) {
this._orderlist = new Array<orderListModel>();

    this._signalRService.connectionEstablished.subscribe(json => { this.orderListModelObject = json;  this._orderlist.push(this.orderListModelObject); console.log('Change made!') })

}
getRecentListorder(): void {
        this._currencyRateService.GetCurrencyOrderList(this._currencyType,this._orderMode)
            .subscribe(result => { 
                this._orderlist=result.json()  as  Array<orderListModel>;
                this.cdRef.detectChanges();
            });
    }
  ngOnInit() {
   let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{ this._orderlist
          //,
        //this.cdRef.detectChanges();
        });

this.getRecentListorder();

  }
}
