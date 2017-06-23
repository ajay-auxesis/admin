import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-deposit-component',
  templateUrl: './deposit-component.component.html',
  styleUrls: ['./deposit-component.component.css']
})
export class DepositComponentComponent implements OnInit {
//@Input() value:any;
  constructor() { }
//newvalue: number;
  ngOnInit() {
   // this.newvalue=this.value;
  }

}
