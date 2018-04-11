import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approve-kyc',
  templateUrl: './approve-kyc.component.html',
  styleUrls: ['./approve-kyc.component.css']
})
export class ApproveKycComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
editKyc(){
  this._router.navigate(['update_kyc']);
}
}
