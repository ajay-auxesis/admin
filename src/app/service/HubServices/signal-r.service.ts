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
public sortArry(orlistarray:Array<orderListModel>,newordermodel:orderListModel): Array<orderListModel> {  
    if(orlistarray==null)
    {
        return null;
    }
    
    var myself=this;   
       this.IsRateExist
let newarray=new Array<orderListModel>();
var previouserate:number=0;
var higestrate:number=0;
orlistarray.forEach(function(item){

 if(newordermodel!=null &&  item.Rate!=newordermodel.Rate)item.IsNewOrder=false;

 if(!myself.IsRateExist(newarray,item.Rate))
   {
       if(item.Rate>higestrate)higestrate=item.Rate;
        newarray.push(item);
    }
   else{
newarray.forEach(function(newitem){
if(item.Rate==newitem.Rate)
newitem.Amount+=item.Amount;
});
   }
});


newarray.forEach(function(hihgestorderitem){
if(hihgestorderitem.Rate==higestrate)
{
    if(hihgestorderitem.IsNewOrder){
hihgestorderitem.IsNewOrder=false;
    }

hihgestorderitem.IsHigheRate=true;
}
else{
   
hihgestorderitem.IsHigheRate=false; 
}
});

return newarray;
} 





}
