
import { GetClockTime } from './models/DepositModel';

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

    //signalR proxy reference
    private proxy: SignalR.Hub.Proxy;
  constructor( private _ngZone: NgZone,private _sharedservice: SharedService, private loaderService: LoaderService) { 
  this.objLoaderStatus=false; 

  this.connection = $.connection;
     
        var connection = $.hubConnection("http://localhost:25704/signalr");
        var chatHubProxy = connection.createHubProxy('myHub');
         connection.start().done(function () {

            console.log('Now connected, connection ID=' + connection.id);
            
        });
        chatHubProxy.on('updateUserTransction', function (name) {
            console.log("updateUserTransction");
            console.log(name);


        });
        
    
  }

  

  title = 'app works!';

 ngOnInit() {




this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });

     
    }

    ngAfterViewChecked() {
    
  }
}
