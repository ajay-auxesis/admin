import { orderListModel } from './../../../models/LTCUSDOrderModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
order:orderListModel;
isClassVisible:boolean=true;
  constructor() { }

  ngOnInit() {
  }

}
