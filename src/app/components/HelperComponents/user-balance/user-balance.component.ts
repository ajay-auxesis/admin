import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-balance',
  templateUrl: './user-balance.component.html',
  styleUrls: ['./user-balance.component.css']
})
export class UserBalanceComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
userTransaction(){
  this._router.navigate(['user_transaction']);
}
kycApprove()
{
this._router.navigate(['aprrove_account']);
}
deposit(){
  this._router.navigate(['deposit']);
}


}
