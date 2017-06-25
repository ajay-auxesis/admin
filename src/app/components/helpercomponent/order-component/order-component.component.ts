import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
@Component({
  selector: 'app-order-component',
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent implements OnInit {
@Input()  _currencyType:CurrencyType;
@Input()  _orderMode: OrderMode;

public order:string;
constructor(private _http: Http) { }


  ngOnInit() {

    console.log("this._currencyType");
    console.log(this._currencyType);

    console.log("this._orderMode");
    console.log(this._orderMode);
  }

}
