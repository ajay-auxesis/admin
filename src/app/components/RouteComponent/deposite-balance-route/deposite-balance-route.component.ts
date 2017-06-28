import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deposite-balance-route',
  templateUrl: './deposite-balance-route.component.html',
  styleUrls: ['./deposite-balance-route.component.css']
})
export class DepositeBalanceRouteComponent implements OnInit {
@Input() CurrencyType: CurrencyType;
  constructor() { }

  ngOnInit() {
    
  }

}
