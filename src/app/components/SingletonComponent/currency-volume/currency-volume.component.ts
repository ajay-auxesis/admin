import { OrderMode } from 'app/enums/order-mode.enum';
import { DepositModel } from './../../../models/DepositModel';
import { PaymentOperationMode } from 'app/enums/payment-operation-mode.enum';
import {Responsecode } from 'app/enums/responsecode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Component, OnInit, Input } from '@angular/core';
import { CurrencyService } from "app/service/CurrencyServices/currency.service";
import { LoaderService } from "app/service/loader-service.service";

@Component({
  selector: 'app-currency-volume',
  templateUrl: './currency-volume.component.html',
  styleUrls: ['./currency-volume.component.css']
})
export class CurrencyVolumeComponent implements OnInit {
@Input() CurrencyType: CurrencyType;
@Input()OrderMode : OrderMode;
_volume:number=0;
  constructor(private _currencyService:CurrencyService,private loaderService: LoaderService) { }

  ngOnInit() {

 this._currencyService.getcurrencyvolume(this.CurrencyType,this.OrderMode).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);

  if (result.status==200) {
   this._volume=result.json().volume;

}
},
error => {
 this.loaderService.displayLoader(false);
//     if(error.status=Responsecode.Unauthorized)
//  {
   
//   console.log('invalid user');
//  }
}
); 

  }

}
