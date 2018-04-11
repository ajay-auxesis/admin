import { DepositAmountModel, ManualDepositModel } from './../../../models/DepositModel';
import { createorderModel } from './../../../models/LTCUSDOrderModel';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoaderService } from 'app/service/loader-service.service';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manual-deposit-detail',
  templateUrl: './manual-deposit-detail.component.html',
  styleUrls: ['./manual-deposit-detail.component.css']
})
export class ManualDepositDetailComponent implements OnInit {

  DepositFormModel: FormGroup;
  constructor(private myElement: ElementRef,  private _http:Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter : HttpEmitterService) { }

  ngOnInit() {
    this.DepositFormModel =this._fb.group({

Amount: new FormControl('', [Validators.required,ValidationmessageserviceService.onlynumber]),
Reason: new FormControl('',[Validators.required]),

});
  }
submitOrder({ value, valid }: { value:ManualDepositModel, valid:boolean }) {



console.log(value);

// this._createOrder.PostOrder(value).debounceTime(1200).subscribe(result =>{ 
// this.loaderService.displayLoader(false);

// },
// error => {
//    this.loaderService.displayLoader(false);
//       if(error.status==Responsecode.Unauthorized)
//   { 
//  this.erroremitter.unauthorizedError(true);

//  }
//  if(error.status==Responsecode.PaymentRequired)
//   {


//  }
// }
// ); 


//this.OrderFormModel.reset();



}
}

