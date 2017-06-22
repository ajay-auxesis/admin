import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ltc-usd-component',
  templateUrl: './ltc-usd-component.component.html',
  styleUrls: ['./ltc-usd-component.component.css']
})
export class LtcUsdComponentComponent implements OnInit {

  constructor() { }
 onNotify(message:string):void {
   console.log(message);
  }
  ngOnInit() {
  }

}
