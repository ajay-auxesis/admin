import { Injectable , EventEmitter} from '@angular/core';

@Injectable()
export class RateEmitterService {
public whenRateChangeEvent :  EventEmitter <any> ;
  constructor() { 
    this.whenRateChangeEvent = new EventEmitter <any>();
  }

    public whenRateChanged(data:any): void { 

 this.whenRateChangeEvent.emit(data);
 }  
       }



