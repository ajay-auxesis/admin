
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from "app/service/CurrencyServices/currency.service";
import { LoaderService } from "app/service/loader-service.service";

@Component({
  selector: 'app-my-currency-balance',
  templateUrl: './my-currency-balance.component.html',
  styleUrls: ['./my-currency-balance.component.css']
})
export class MyCurrencyBalanceComponent implements OnInit {

@Input() CurrencyType: CurrencyType;
_mybalance:number=0;
  constructor(private _currencyService:CurrencyService,private loaderService: LoaderService) { }

  ngOnInit() {
this._currencyService.getbalance(this.CurrencyType).debounceTime(1200).subscribe(result =>{
this.loaderService.displayLoader(false);
  if (result.status==200) {
    this._mybalance=result.json().Balance;
  }
}); 

}

}
