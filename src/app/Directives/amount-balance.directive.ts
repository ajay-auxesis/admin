import { Directive,ElementRef,Renderer,Input } from '@angular/core';

@Directive({
  selector: '[AmountBalance]'
})
export class AmountBalanceDirective {

  @Input() set eventListener (val){
      val.subscribe((param:any)=>{
      this.calculateBalance(param);
 });
}

constructor(el: ElementRef, renderer: Renderer) { }
balance: any;
total:any;
calculateBalance(val){
this.balance=val;
   console.log(val); 
  //  for(var i = 0; i < this.balance.length; i++){
  //     console.log(this.balance.length);
  //       var product = this.balance[i];
  //       this.total += (product);
  //   } 

  //   console.log(this.balance.length);

     }
}