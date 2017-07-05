import { orderListModel } from './../../../models/LTCUSDOrderModel';
import { Component, OnInit } from '@angular/core';

@Component({
  // selector:'[tr-order-lis-row]',
  templateUrl: './order-lis-row.component.html',
  styleUrls: ['./order-lis-row.component.css']
   
})
export class OrderLisRowComponent implements OnInit {

order:orderListModel;
isClassVisible:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
