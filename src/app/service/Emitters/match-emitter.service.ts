import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MatchEmitterService {

  public whenMatchedHappendEvent: EventEmitter <any> ;

  constructor() {
      this.whenMatchedHappendEvent= new EventEmitter <any>();
      
       }

public whenMatchedHappend (data:any): void { 

 this.whenMatchedHappendEvent.emit(data);
 }
}


 