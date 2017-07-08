

import { AppSettings } from 'app/app-settings';
import { SharedService } from './../../../service/shared.service';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message-popup',
  templateUrl: './error-message-popup.component.html',
  styleUrls: ['./error-message-popup.component.css']
})
export class ErrorMessagePopupComponent implements OnInit {

IsUserunauthorized:boolean=false;
Ispaymentrequired:boolean=false;
private IsUserunauthorizedObserver: Subscription;
private IspaymentrequiredObserver: Subscription;

  constructor(private emitterService : HttpEmitterService,private _sharedservice:SharedService ){ 

this.emitterService.unauthorizeduseremiter.subscribe(json => {
 this.IsUserunauthorized = json as boolean;
      })
this.emitterService.paymentrequiredemiter.subscribe(json => {
 this.Ispaymentrequired = json as boolean;
      })
    
  }

  ngOnInit() {
   let timer = Observable.interval(1000);
        this.IsUserunauthorizedObserver = timer.subscribe(() =>{
           this.IsUserunauthorized
       });
 this.IspaymentrequiredObserver = timer.subscribe(() =>{
           this.Ispaymentrequired
           
       });
  }
  public payment()
{
this.Ispaymentrequired=false;
}

}