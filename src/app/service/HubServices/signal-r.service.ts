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

console.log("service");
console.log(data);
this.connectionEstablished.emit(data);
     //this.myself=this;
//  this.connection = $.hubConnection(AppSettings.HubUrl);
//           this.chatHubProxy =this.connection.createHubProxy('myHub');
//           this.connection.start().done(function () {
//                this.connectionExists = true;  
//       // this.myself.connectionEstablished.emit(true);  
//              console.log('Now connected, connection ID=' + this.connection.id);
            
//          });
     //return true;
    }  
    private registerOnServerEvents(): void {  
       

        //  this.chatHubProxy.on('updateUserTransction', function (name) {
        //      console.log("updateUserTransction");
        //      console.log(name);


         //});
         
    }  

}
