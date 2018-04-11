import { CompanyModel, CompanyLogoModel } from './../../../models/DepositModel';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { LoaderService } from 'app/service/loader-service.service';
import { HttpEmitterService } from './../../../service/CoustomeHttpService/http-emitter.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';
import {UPLOAD_DIRECTIVES} from 'ng2-uploader/ng2-uploader';
// import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

// const URL = 'http://localhost:8000/api/upload';


@Component({
  selector: 'app-company-logo',
  templateUrl: './company-logo.component.html',
  styleUrls: ['./company-logo.component.css']
})
export class CompanyLogoComponent implements OnInit {
LogoFormModel: FormGroup;
base64textString:any;
uploadFile: any;
 

  constructor(private myElement: ElementRef,  private _http:Http,private _fb: FormBuilder,private _router: Router,private loaderService:LoaderService,private erroremitter : HttpEmitterService) { }

  ngOnInit() {
    this.LogoFormModel =this._fb.group({
 Title:new FormControl('', [Validators.required]),
 
File:new FormControl(''),

});
  }

submitOrder({ value, valid }: { value:CompanyLogoModel, valid:boolean }) {

value.File= this.base64textString;

console.log(value);

// this._createOrder.PostOrder(value).debounceTime(1200).subscribe(result =>{ 
// this.loaderService.displayLoader(false);

// },
//  error => {
//this.loaderService.displayLoader(false);
//       if(error.status==Responsecode.Unauthorized)
//   { 
// this.erroremitter.unauthorizedError(true);  
//  }
//  if(error.status==Responsecode.PaymentRequired)
//   {
// this.erroremitter.paymentRequiredError(true);
//  }
// }
 
//); 

//this.OrderFormModel.reset();

}

handleUpload($evt){
      var files = $evt.target.files;
      var file = files[0];
    this.base64textString=file ;
    if (files && file) {
        var reader = new FileReader();

        reader.onload =this._handleReaderLoaded.bind(this);

       // reader.readAsBinaryString(file);
    }
  }
  
  _handleReaderLoaded(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
          console.log(btoa(binaryString));
          //  console.log(this.base64textString);
    }

}