import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';
import { ActiveOrderService } from './../../../service/OrderServices/active-order.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';


require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' ); 
require( 'datatables.net-buttons/js/buttons.flash.js' ); 
require( 'datatables.net-buttons/js/buttons.print.js' );

var $       = require( 'jquery' );
var dt      = require( 'datatables.net' );

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
 _activeOrders:any[]=[];
id:any; 
@Input()  _currencyType:CurrencyType;
@Input()  _orderMode: OrderMode;
  constructor( private _activeorderservice: ActiveOrderService,private loaderService : LoaderService, private erroremitter: HttpEmitterService) { }



  ngOnInit() {

if(this._currencyType.toString()==CurrencyType[CurrencyType.BTC]){
this.id='activetableBTC';
}
if(this._currencyType.toString()==CurrencyType[CurrencyType.ETH]){
  this.id='activetableETH';
}
var newid='#'+this.id;

setTimeout(function () {
$(newid).DataTable({
   dom: 'Bfrtip',
        buttons: [
            'copy',{
           extend: 'pdf',
           exportOptions: {
           columns: [1,2,3,4,5,6]
            }
       },{
           extend: 'csv',
           exportOptions: {
           columns: [1,2,3,4,5,6]
            }
       },{
           extend: 'excel',
            exportOptions: {
           columns: [1,2,3,4,5,6]
            }
       }   
        ]
     } );
},1000);


    this._activeorderservice.getallactiveorder(this._currencyType,this._orderMode).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);
//result.
  if (result.status==200) {
    let activeOrders =result.json(); 
  //this._activeOrders =result.json(); 
  console.log(result.json());
  if(activeOrders!=null){
  activeOrders.forEach(element => {
    if(CurrencyType[element.currencyType]==this._currencyType.toString()){
        this._activeOrders.push(element);
    }
    // console.log(CurrencyType[element.currencyType],this._currencyType.toString());
  });
  }
 //console.log(activeOrders);
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
