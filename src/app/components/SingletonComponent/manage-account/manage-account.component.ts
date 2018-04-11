import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { CompanyModel, UserModel, ChangePasswordModel } from './../../../models/DepositModel';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { LoaderService } from './../../../service/loader-service.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {

 
  ChangePasswordModel: FormGroup;
  constructor(private myElement: ElementRef,  private _http:Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter :HttpEmitterService) { }

  ngOnInit() {
    this.ChangePasswordModel =this._fb.group({

Currentpassword: new FormControl('', [Validators.required]),
Password: new FormControl('',[Validators.required,Validators.minLength(8)]),
Confirmpassword: new FormControl('',[Validators.required,ValidationmessageserviceService.ConfirmpasswordValidator]),

});
  }
submitOrder({ value, valid }: { value:ChangePasswordModel, valid:boolean }) {



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



