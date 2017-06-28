import { AppSettings } from './../../../app-settings';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ltc-usd-route',
  templateUrl: './ltc-usd-route.component.html',
  styleUrls: ['./ltc-usd-route.component.css']
})
export class LtcUsdRouteComponent implements OnInit {
@Input() CurrencyType: CurrencyType;
  constructor() {


   }

  ngOnInit() {
   
  }

}
