import { DepositAmountModel, ManualDepositModel, CompanyModel } from './../../../models/DepositModel';
import { createorderModel } from './../../../models/LTCUSDOrderModel';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoaderService } from 'app/service/loader-service.service';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {

  Pancard:any;
  CreateCompanyModel: FormGroup;
  constructor(private myElement: ElementRef,  private _http:Http,private _fb: FormBuilder,private _router: Router,private loaderService: LoaderService,private erroremitter : HttpEmitterService) { }

  ngOnInit() {
    this.CreateCompanyModel =this._fb.group({

Name: new FormControl('', [Validators.required]),
ID: new FormControl('',[Validators.required]),
Director: new FormControl('',[Validators.required]),
//Pancard: new FormControl('',[Validators.required]),
});
  }
submitOrder({ value, valid }: { value:CompanyModel, valid:boolean }) {

value.Pancard=this.Pancard;

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
   
    this.Pancard=$event.target.files[0];
   console.log(this.Pancard);
}

// onFileChange(evt){
//       var files = evt.target.files;
//       var file = files[0];
    
//     if (files && file) {
//         var reader = new FileReader();

//         reader.onload =this._handleReaderLoaded.bind(this);

//         reader.readAsBinaryString(file);
//     }
//   }
  
  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.Pancard= btoa(binaryString);
          console.log(btoa(binaryString));
          //  console.log(this.base64textString);
    }

}


