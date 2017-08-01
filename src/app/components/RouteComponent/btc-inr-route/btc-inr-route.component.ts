import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btc-inr-route',
  templateUrl: './btc-inr-route.component.html',
  styleUrls: ['./btc-inr-route.component.css']
})
export class BtcInrRouteComponent implements OnInit {
@Input() CurrencyType: CurrencyType;
  constructor() { }

  ngOnInit() {
  }

}
