import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eth-inr-route',
  templateUrl: './eth-inr-route.component.html',
  styleUrls: ['./eth-inr-route.component.css']
})
export class EthInrRouteComponent implements OnInit {
@Input() CurrencyType: CurrencyType;
  constructor() { }

  ngOnInit() {
  }

}
