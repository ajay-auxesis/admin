import { orderListModel } from './../../models/LTCUSDOrderModel';
import { AppSettings } from './../../app-settings';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SignalRService {
// connection:SignalR;
// chatHubProxy:SignalR.Hub.Proxy;
//     public connectionExists: Boolean;  
  public connectionEstablished: EventEmitter <orderListModel> ;  

  constructor() {
   


   this.connectionEstablished= new EventEmitter <orderListModel>();
//   this.connectionExists = false; 

//           this.startConnection();

   }
   
   public startConnection(data:orderListModel): void { 


this.connectionEstablished.emit(data);
  
    }  
    private registerOnServerEvents(): void {  
       

      
    }  


   private sortArry(orlistarray:Array<orderListModel>): void {  
       

      
    }  


}
