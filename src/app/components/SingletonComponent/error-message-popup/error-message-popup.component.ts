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
  constructor(private emitterService : HttpEmitterService){ 


    this.emitterService.unauthorizeduseremiter.subscribe(json => {

console.log(" before IsUserunauthorizedObserver" + json);
       this.IsUserunauthorized = json as boolean;
       console.log(" after IsUserunauthorizedObserver" + json);
      })

  }



  ngOnInit() {
   let timer = Observable.interval(100);
        this.IsUserunauthorizedObserver = timer.subscribe(() =>{ this.IsUserunauthorized
        
        });
  }
}