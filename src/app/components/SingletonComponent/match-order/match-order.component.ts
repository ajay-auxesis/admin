
import { DynamicMatchOrderService } from './dynamic-match-order.service';
import { matchorderModel } from './../../../models/LTCUSDOrderModel';
import { Observable } from 'rxjs/Rx';
import { MatchEmitterService } from './../../../service/Emitters/match-emitter.service';
import { Subscription } from 'rxjs/Subscription';
import { MatchOrderService } from './../../../service/OrderServices/match-order.service';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { OrderMode } from 'app/enums/order-mode.enum';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { Responsecode } from 'app/enums/responsecode.enum';
import { LoaderService } from './../../../service/loader-service.service';

import { Component, OnInit, Input, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { DataTableModule } from "angular2-datatable";
 import 'rxjs/Rx';

require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' ); 
require( 'datatables.net-buttons/js/buttons.flash.js' ); 
require( 'datatables.net-buttons/js/buttons.print.js' );

var $       = require( 'jquery' );
var dt      = require( 'datatables.net' );


//declare let jsPDF;
@Component({
  selector: 'app-match-order',
  templateUrl: './match-order.component.html',
  styleUrls: ['./match-order.component.css']
})
export class MatchOrderComponent implements OnInit {
rootNode:any;
//_matchOrders:any;
//  @ViewChild('someVar') el:ElementRef;
@Input()  _currencyType:CurrencyType;
@Input()  _orderMode: OrderMode;
_Count:any=0;
_orderDetail:any=0;
today=new Date();
private timerObserver: Subscription;
public matchdto: any;
 @ViewChild('matchorderlistparent', {read: ViewContainerRef})
  matchorderlistparent: ViewContainerRef;
public _matchOrders: Array<matchorderModel>;
private matchorderListModelObject: matchorderModel;
previd:any=0;
prevamount:any=0;
Isauthorized:boolean=false;
 newdetail:any=[]; 
id:any;

  constructor(  private _matchEmitterService:MatchEmitterService,private _matchorderservice : MatchOrderService,private loaderService : LoaderService , private erroremitter : HttpEmitterService, private _dynamicmatchorderService : DynamicMatchOrderService,private componentFactoryResolver:ComponentFactoryResolver,private cdRef: ChangeDetectorRef,) { 

this._matchOrders = new Array<matchorderModel>();

      this._matchEmitterService.whenMatchedHappendEvent.subscribe(json => { 
   this.matchdto=json;

   this.AddNewMatchOrder(this.matchdto);
  
  });
   
}


private AddNewMatchOrder(matchorderListModelnew:matchorderModel) {
matchorderListModelnew.CreationDateTime= new Date();


var newmatchorderlist= new  Array<matchorderModel>();
newmatchorderlist=this._matchOrders;

if(newmatchorderlist!=null && CurrencyType[matchorderListModelnew.currencyType]==this._currencyType.toString()){

newmatchorderlist.push(matchorderListModelnew);
//this.distinctmatchorder(newmatchorderlist);
//console.log(matchorderListModelnew);

}


}
  ngOnInit() {
//var el = $(this.rootNode.nativeElement).Find('#newmatch')[0];
   
if(this._currencyType.toString()==CurrencyType[CurrencyType.BTC]){
this.id='matchtableBTC';
}
if(this._currencyType.toString()==CurrencyType[CurrencyType.ETH]){
  this.id='matchtableETH';
}
var newid='#'+this.id;

setTimeout(function () {
$(newid).DataTable({
   dom: 'Bfrtip',
       buttons: [
            'copy',{
           extend: 'pdf',
           exportOptions: {
           columns: [1,2,3,4,5,6,7,8]
            }
       },{
           extend: 'csv',
           exportOptions: {
           columns: [1,2,3,4,5,6,7,8]
            }
       },{
           extend: 'excel',
            exportOptions: {
           columns: [1,2,3,4,5,6,7,8]
            }
       }   
        ]
     } );
},1000);

       let timer = Observable.interval(100);
        this.timerObserver = timer.subscribe(() =>{ 

 });

   this._matchorderservice.getallmatchorder(this._currencyType,this._orderMode).debounceTime(1200).subscribe( result =>{
this.loaderService.displayLoader(false);

  if (result.status==200 && result!=null) {

console.log(result.json());
  this._matchOrders = result.json(); 
  this._orderDetail=this._matchOrders;
  if( this._matchOrders !=null)
{
  this.distinctmatchorder(this._matchOrders);
}
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

  distinctmatchorder(distinctmatchorder){


    var matcharray =new matchorderModel();
    var newmatch = [];
    for( var x in distinctmatchorder){
     
     if( typeof(matcharray[distinctmatchorder[x].OrderId])=='undefined'  /* &&distinctmatchorder[x].CurrencyType == this._currencyType.toString()=="LTC" */){
       
      newmatch.push(distinctmatchorder[x].OrderId);
     }
     matcharray[distinctmatchorder[x].OrderId]=0;
    }
//console.log(newmatch);

newmatch.forEach(item=>{
 this._matchOrders .forEach(element => {
    if(element.OrderId==item)
    { element.FilledAmount=element.FilledAmount+this.prevamount;
       //console.log(element.FilledAmount+' ' +this.prevamount);
       this.prevamount=element.FilledAmount;
      
  }
});
this.prevamount=0;
})

distinctmatchorder.reverse();

var unique =new matchorderModel();
var distinct = [];

    for( var i in distinctmatchorder){ var num=0;
     if( typeof(unique[distinctmatchorder[i].OrderId])=='undefined' ){
      distinct.push(distinctmatchorder[i]);

     }
     unique[distinctmatchorder[i].OrderId]=0;
    }
distinctmatchorder=distinct;
distinctmatchorder.reverse(); 
this._matchOrders=distinctmatchorder;




  }

  showDetail(orderid){
    
  this._orderDetail.forEach(element => {
  if(element.OrderId==orderid){
this.newdetail.push(element);

  }
 
});
this.Isauthorized=true;
  }

  hideDetail()
{
this.Isauthorized=false;
this.newdetail=[];
}

}

						 	



