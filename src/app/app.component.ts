import { Router } from '@angular/router';
import { orderListModel } from './models/LTCUSDOrderModel';
import { SignalRService } from './service/HubServices/signal-r.service';
import { AppSettings } from './app-settings';



import { Observable } from 'rxjs/Rx';
import { SharedService } from './service/shared.service';
import { Component, NgZone } from '@angular/core';
import { LoaderService } from "./service/loader-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 objLoaderStatus: boolean;
   private connection: SignalR;
_IsAuthenticated:boolean=true;
    //signalR proxy reference
    private proxy: SignalR.Hub.Proxy;
    bodyClasses:string;
location:string;
public canSendMessage: Boolean;
  constructor( private _ngZone: NgZone,private _signalRService:SignalRService,private _sharedservice: SharedService, private loaderService: LoaderService, private _router : Router ) { 
  
   this._sharedservice._IsAuthenticated.subscribe(value => this._IsAuthenticated = value);
  this.objLoaderStatus=false; 

  // this.connection = $.connection;
     
  //       var connection = $.hubConnection(AppSettings.HubUrl);
  //       var chatHubProxy = connection.createHubProxy('myHub');
  //        connection.start().done(function () {

  //           console.log('Now connected, connection ID=' + connection.id);
            
  //       });
  //       chatHubProxy.on('updateUserTransction', function (name) {
  //           console.log("updateUserTransction");
  //           console.log(name);
  //       });

  }




 ngOnInit() {

var self=this;
 var connection = $.hubConnection(AppSettings.HubUrl);
         var chatHubProxy = connection.createHubProxy('myHub');
          connection.start().done(function () {

             console.log('Now connected, connection ID=' + connection.id);

         });
         chatHubProxy.on('updateUserTransction', function (name) {
           let orderListModelobj:orderListModel=name as orderListModel;
        
           self._signalRService.startConnection(orderListModelobj);
           
          


         });

this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });
    if (localStorage.getItem(AppSettings.localtokenkey)!=null) {
        this._router.navigate(['LtcUsd']);
       
      }

    }

    ngAfterViewChecked() {
   
    document.body.classList.remove(document.body.classList.item(1));
   this.location=window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
   if(this.location==''){this.location='home';}
    document.body.classList.add(this.location);
  }
}
