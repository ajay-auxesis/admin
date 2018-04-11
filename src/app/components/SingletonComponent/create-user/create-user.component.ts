import { CompanyModel, UserModel } from './../../../models/DepositModel';
import { HttpEmitterService } from 'app/service/CoustomeHttpService/http-emitter.service';
import { LoaderService } from './../../../service/loader-service.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

Userimage:any;
  CreateUserModel: FormGroup;
  constructor(private myElement: ElementRef,  private _http:Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter :HttpEmitterService) { }

  ngOnInit() {
    this.CreateUserModel =this._fb.group({

Firstname: new FormControl('', [Validators.required]),
Lastname: new FormControl('',[Validators.required]),


});
  }
submitOrder({ value, valid }: { value:UserModel, valid:boolean }) {

value.Userimage=this.Userimage;

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
onFileChange($event) {
     let file = $event.target.files[0]; 
   
    this.Userimage=$event.target.files[0];
 console.log(this.Userimage);
}

}



