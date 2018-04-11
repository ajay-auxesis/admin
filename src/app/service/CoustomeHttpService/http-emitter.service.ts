import { Injectable } from '@angular/core';
import { Output,EventEmitter} from '@angular/core';


@Injectable()
export class HttpEmitterService {
  
@Output() unauthorizeduseremiter : EventEmitter<boolean>;
@Output() paymentrequiredemiter : EventEmitter<boolean>;
  constructor() { 


 this.unauthorizeduseremiter= new EventEmitter();
this.paymentrequiredemiter= new EventEmitter();
  }

public unauthorizedError(status:boolean): void{

    
      this.unauthorizeduseremiter.emit(status);
   
  }
public paymentRequiredError(status:boolean): void{      

       
      this.paymentrequiredemiter.emit(status);
    
  }
}
