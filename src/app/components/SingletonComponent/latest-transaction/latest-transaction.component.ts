import { CurrencyType } from 'app/enums/currency-type.enum';
import { OrderMode } from 'app/enums/order-mode.enum';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-latest-transaction',
  templateUrl: './latest-transaction.component.html',
  styleUrls: ['./latest-transaction.component.css']
})
export class LatestTransactionComponent implements OnInit {
@Input()  _orderMode: OrderMode;
@Input()  _currencyType:CurrencyType;
  constructor() { }

  ngOnInit() {
  }

}
