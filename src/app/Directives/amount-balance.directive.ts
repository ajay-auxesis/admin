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
USDbalance:number=0;
BTCbalance:number=0;
calculateBalance(val){

   

     }
   
}