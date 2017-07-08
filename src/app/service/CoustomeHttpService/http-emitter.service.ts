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

        
   
            
    // if(status)
    // {
      this.unauthorizeduseremiter.emit(status);
    //}
  }
public paymentRequiredError(status:boolean): void{

           // console.log("paymentRequiredError status "+status);
   
            
    // if(status)
    // {
      this.paymentrequiredemiter.emit(status);
    //}
  }


}
