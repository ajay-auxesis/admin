import { DepositAmountModel, KYCModel } from './../../../models/DepositModel';
import { createorderModel } from './../../../models/LTCUSDOrderModel';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoaderService } from 'app/service/loader-service.service';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-kyc-update',
  templateUrl: './kyc-update.component.html',
  styleUrls: ['./kyc-update.component.css']
})
export class KycUpdateComponent implements OnInit {

 KYCFormModel: FormGroup;
 PancardDocument:any
 AddressDocument:any
  constructor(private myElement: ElementRef,  private _http:Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter : HttpEmitterService) { }

  ngOnInit() {
    this.KYCFormModel =this._fb.group({
  Name:new FormControl('', [Validators.required]),
  Account:new FormControl('', [Validators.required,ValidationmessageserviceService.onlynumber]),
  IFSC:new FormControl('', [Validators.required]),
  Phone:new FormControl('', [Validators.required,ValidationmessageserviceService.onlynumber]),
  Pancard: new FormControl('', [Validators.required]),
  Address: new FormControl('', [Validators.required]),

// PancardDocument: new FormControl(''),
// AddressDocument: new FormControl(''),
Status: new FormControl('', [Validators.required]),


});
  }

  submitOrder({ value, valid }: { value:KYCModel, valid:boolean }) {

value.AddressDocument=this.PancardDocument;
value.PancardDocument=this.AddressDocument;

console.log(value);

  }
onFileChange($event) {
     let file = $event.target.files[0]; 
   // this.KYCFormModel.controls['AddressDocument'].setValue('asasdff');
    this.PancardDocument=$event.target.files[0];
   console.log($event.target.files[0]);
}
onFileChangeaddress($event) {
     let file = $event.target.files[0]; 
   // this.KYCFormModel.controls['AddressDocument'].setValue('asasdff');
    this.AddressDocument=$event.target.files[0];
   console.log($event.target.files[0]);
}
}
