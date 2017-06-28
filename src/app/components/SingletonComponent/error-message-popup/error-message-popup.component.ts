import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { InterceptedHttp } from './../../../service/CoustomeHttpService/InterceptedHttp ';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message-popup',
  templateUrl: './error-message-popup.component.html',
  styleUrls: ['./error-message-popup.component.css']
})
export class ErrorMessagePopupComponent implements OnInit {
value:any;
  constructor(private emitterService : HttpEmitterService){ 
   

  }

  ngOnInit() {

  }

}
