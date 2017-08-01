import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})
export class ActiveListComponent implements OnInit {
 _activeOrders:any;
  constructor() { }

  ngOnInit() {
    //console.log(this._activeOrders);
  }

}
