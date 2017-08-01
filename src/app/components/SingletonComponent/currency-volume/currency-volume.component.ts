import { orderListModel } from './../../../models/LTCUSDOrderModel';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
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
  constructor(private _currencyService:CurrencyService,private loaderService: LoaderService, private erroremitter : HttpEmitterService) { }

  ngOnInit() {

 this._currencyService.getcurrencyvolume(this.CurrencyType,this.OrderMode).debounceTime(1200).subscribe( result =>{
 this.loaderService.displayLoader(false);
//console.log(this.CurrencyType,this.OrderMode,result.json());
  if (result.status==200) {
   this._volume=result.json().volume;
this._volume=this._volume.tofixedDown(2);
}
} ,
error => {
   this.loaderService.displayLoader(false);
      if(error.status==Responsecode.Unauthorized)
  {
  
this.erroremitter.unauthorizedError(true);
   
 }

}
); 

  }

  newVolumeTotal(orderListModelnew : orderListModel){
   
     var curname:CurrencyType=this.CurrencyType;
 var  ordername:OrderMode=this.OrderMode;


           if(orderListModelnew.OrderMode == OrderMode.Sell && CurrencyType[orderListModelnew.CurrencyType]==curname.toString())
           {
           
              this._volume+=orderListModelnew.Amount;
             this._volume=this._volume.tofixedDown(2);
          }
           if(orderListModelnew.OrderMode == OrderMode.Buy && CurrencyType[orderListModelnew.CurrencyType]==curname.toString())
           {
           
              this._volume+=(orderListModelnew.Amount*orderListModelnew.Rate);
              this._volume=this._volume.tofixedDown(2);
          }

   }

}
