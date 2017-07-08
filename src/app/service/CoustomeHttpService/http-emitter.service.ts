import { Injectable } from '@angular/core';
import { Output,EventEmitter} from '@angular/core';


@Injectable()
export class HttpEmitterService {
  
@Output() unauthorizeduseremiter : EventEmitter<boolean>;
@Output() paymentrequiredemiter : EventEmitter<boolean>;
@Output() myBalanceemiter : EventEmitter<number>;
@Output() myBalanceUSDemiter :  EventEmitter<number>;
  constructor() { 


 this.unauthorizeduseremiter= new EventEmitter();
this.paymentrequiredemiter= new EventEmitter();
this.myBalanceemiter= new EventEmitter();
this.myBalanceUSDemiter= new EventEmitter();
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

//   public myBalanceLTC(balance:number): void{
// //console.log("mybalance "+balance);
   
//     this.myBalanceemiter.emit(balance);

//   }

//   public myBalanceUSD(balance:number): void{
// console.log("mybalance "+balance);
   
//     this.myBalanceUSDemiter.emit(balance);

//   }
}
