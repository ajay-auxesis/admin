import { Injectable } from '@angular/core';
import { Output,EventEmitter} from '@angular/core';


@Injectable()
export class HttpEmitterService {
  
@Output() unauthorizeduseremiter : EventEmitter<boolean>;

  constructor() { 


 this.unauthorizeduseremiter= new EventEmitter();

  }

public unauthorizedError(status:boolean): void{

     
   
            
    if(status)
    {
      this.unauthorizeduseremiter.emit(status);
    }
  }

}
