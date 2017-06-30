import { OrderMode } from 'app/enums/order-mode.enum';
import { orderListModel } from './../../models/LTCUSDOrderModel';
import { AppSettings } from './../../app-settings';
import { Injectable, EventEmitter } from '@angular/core';
@Injectable()
export class SignalRService {
  public connectionEstablished: EventEmitter <orderListModel> ;  
  constructor() {
   this.connectionEstablished= new EventEmitter <orderListModel>();
   }
   public startConnection(data:orderListModel): void { 
this.connectionEstablished.emit(data);
    }  
    private registerOnServerEvents(): void {  
    } 
 public IsRateExist(orlistarray:Array<orderListModel>,rate:number):boolean {  
var status:boolean=false;
 orlistarray.forEach(function(item){
 if(item.Rate==rate)status=true;
});
return status;
}
public sortArry(orlistarray:Array<orderListModel>,newordermodel:orderListModel,orderMode:OrderMode): Array<orderListModel> {  
    if(orlistarray==null)
    {
        return null;
    }
var myself=this;   
let newarray=new Array<orderListModel>();
var previouserate:number=0;
var highestvolume:number=0;
orlistarray.forEach(function(item){
item.IsHigestVolume=false;
 if(newordermodel!=null &&  item.Rate!=newordermodel.Rate)item.IsNewOrder=false;
 if(!myself.IsRateExist(newarray,item.Rate))
   {
       if(item.Amount>highestvolume)highestvolume=item.Amount;
        newarray.push(item);
    }
else{
newarray.forEach(function(newitem){
if(item.Rate==newitem.Rate)
newitem.Amount+=item.Amount;
 if(newitem.Amount>highestvolume)highestvolume=newitem.Amount;
});
   }
});
// newarray.find(x=>x.Amount==highestvolume).IsHigestVolume=true;

newarray.forEach(element => {
    if(element.Amount==highestvolume){
  element.IsHigestVolume=true;
  element.IsNewOrder=false;
    }
});

if(OrderMode[orderMode]==OrderMode.Buy.toString()){
 console.log("come to buy"); console.log(newarray); return newarray.sort(function(obj1, obj2) {	return obj2.Rate - obj1.Rate;});;
}
if(OrderMode[orderMode]==OrderMode.Sell.toString())console.log("come to sell"); console.log(newarray); return newarray.sort(function(obj1, obj2) {	return obj1.Rate - obj2.Rate;});;

} 
}
