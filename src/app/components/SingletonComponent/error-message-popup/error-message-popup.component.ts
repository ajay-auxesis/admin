
import { AppSettings } from 'app/app-settings';
import { SharedService } from './../../../service/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
//import { InterceptedHttp } from './../../../service/CoustomeHttpService/InterceptedHttp ';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message-popup',
  templateUrl: './error-message-popup.component.html',
  styleUrls: ['./error-message-popup.component.css']
})
export class ErrorMessagePopupComponent implements OnInit {

IsUserunauthorized:boolean=false;

private IsUserunauthorizedObserver: Subscription;

  constructor(private emitterService : HttpEmitterService,private _sharedservice:SharedService ){ 

this.emitterService.unauthorizeduseremiter.subscribe(json => {
 this.IsUserunauthorized = json as boolean;
      })

    
  }

  ngOnInit() {
   let timer = Observable.interval(100);
        this.IsUserunauthorizedObserver = timer.subscribe(() =>{
           this.IsUserunauthorized

         

       });

  }
}