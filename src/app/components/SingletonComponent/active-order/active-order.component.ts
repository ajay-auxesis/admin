import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';
import { ActiveOrderService } from './../../../service/OrderServices/active-order.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';




@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
 _activeOrders:any;
 
@Input()  _currencyType:CurrencyType;
@Input()  _orderMode: OrderMode;
  constructor( private _activeorderservice: ActiveOrderService,private loaderService : LoaderService, private erroremitter: HttpEmitterService) { }



  ngOnInit() {

    this._activeorderservice.getallactiveorder(this._currencyType,this._orderMode).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);
//result.
  if (result.status==200) {
  this._activeOrders =result.json(); 
 console.log(this._activeOrders);
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

}
