import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-currency-balance',
  templateUrl: './my-currency-balance.component.html',
  styleUrls: ['./my-currency-balance.component.css']
})
export class MyCurrencyBalanceComponent implements OnInit {

@Input() CurrencyType: CurrencyType;
  constructor() { }

  ngOnInit() {

  
}

}
