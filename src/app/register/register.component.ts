import { LoaderService } from './../service/loader-service.service';
import { AppSettings } from './../app-settings';
import { Router } from '@angular/router';
import { LoginModel } from './../models/login';
import { Registermodel } from './../models/registermodel';
import { RegisterService } from './../service/registerservice/register.service';
import { RegisterInterface } from './../interface/register-interface';
import { SharedService } from './../service/shared.service';
import { ValidationmessageserviceService } from './../service/validationmessageservice.service';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/observable/fromEvent';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SafeHtml } from "@angular/platform-browser";
import { UserType } from './../enums/user-type.enum';
import { Responsecode } from './../enums/responsecode.enum';
import { LocalStorage, SessionStorage } from "ngx-webstorage";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
     registermodel: FormGroup;
     data: any;
//     public elementRef;
 registerresponse:Response;
//     private count: number = 1;
//     public items: Array<any>;
_errormsg:any;
  loginresponse: Response;
  ngOnInit() {
  }
constructor(myElement: ElementRef, private _sharedservice: SharedService, private _http: Http,private fb: FormBuilder,private _registerservice: RegisterService,private _router: Router,private loaderService: LoaderService) {
    
    // this.elementRef = myElement;
     this.registermodel =this.fb.group({
          
           Email: new FormControl('', [Validators.required, ValidationmessageserviceService.emailValidator,ValidationmessageserviceService.emailinuseValidator]),
           Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        ConfirmPassword:new FormControl('', [Validators.required,ValidationmessageserviceService.ConfirmpasswordValidator]),
       });
      
 }


onSubmit({ value, valid }: { value: Registermodel, valid: boolean }) {

  this._registerservice.PostUser(value).debounceTime(400).subscribe(result =>{
      this.registerresponse=result;

if(this.registerresponse.status=Responsecode.Created)
{

let Loginmodelobj=new LoginModel(); 
Loginmodelobj.Password=value.Password;
Loginmodelobj.UserName=value.Email;
  this._sharedservice.Login(Loginmodelobj).debounceTime(400).subscribe(result =>{

this.loginresponse=result;

if(this.loginresponse.status=Responsecode.OK)
{

​let responobject:any=this.loginresponse.json();
localStorage.setItem(AppSettings.localtokenkey, responobject.AccessToken);
localStorage.setItem('username',responobject.UserName);
this.loaderService.displayLoader(false);
this._router.navigate(['Btc_Inr']);
}
});

}

   return false;  
  }
  ,
  error =>{
    this.loaderService.displayLoader(false);
    if(error.status==409)
    {
    this._errormsg="User with this email already registered "
    }

  });



    }




    }




