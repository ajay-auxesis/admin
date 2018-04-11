import { AppSettings } from 'app/app-settings';
import { ConnectionBackend, XSRFStrategy } from '@angular/http';
import { XHRBackend } from '@angular/http';
//import { AppSettings } from './../components/SingletonComponent/lowest-ask-price/app-settings';
import { Observable } from 'rxjs/Observable';
import { Http, HttpModule, RequestOptions, CookieXSRFStrategy, BrowserXhr, ResponseOptions, BaseRequestOptions, BaseResponseOptions,Headers } from '@angular/http';
import { OrderMode } from 'app/enums/order-mode.enum';
import 'rxjs/Rx';
import { CurrencyType } from 'app/enums/currency-type.enum';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Injectable, ReflectiveInjector } from '@angular/core';
import { Validator,  NG_VALIDATORS } from '@angular/forms';
@Injectable()
export class ValidationmessageserviceService {
    static messages=0;
    static newval=0;
   formgroupparents: FormGroup;
 //public static message:any=0;
constructor(private _http : Http){}
     static getValidatorErrorMessage(validatorName: string, validatorValue?: any,confirmpassword?:string,controlname?:string,currencytype?:string) {
        if(currencytype==undefined){ currencytype=''; }
        let config = {
            'required': `${currencytype} ${controlname} Required`,
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'EmailInuse': `This Email Id Already taken.`,
            'passwordnotmatch':`Password does not match`,
            'onlynumber' : `${controlname} must be a number .`,
            'maxValue' : `Not enough ${currencytype} balance`,
            'CheckBalance' : `Not enough ${currencytype} balance`,
            'balanceCheck' : `Not enough INR balance`,
            'Fiatprecision' : `${controlname} precise upto 8 decimal only`,
            'valueCheck' : `${controlname} must be greater than zero`
        };
        return config[validatorName];
    }
    static emailValidator(control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }
       static emailinuseValidator(control) {
        // RFC 2822 compliant regex
        if (control.value !="amjadlko@gmail.com") {
            return null;
        } else { 
            return { 'EmailInuse': true };
        }
    }
    static passwordValidator(control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        } else {
            return { 'invalidPassword': true };
        }
    }
    static passwordMatchValidator(g: FormGroup) {
         if (g.get('Password').value === g.get('ConfirmPassword').value) {
            return null;
        } else {
            return { 'passwordnotmatch': true };
        }
    }
    static onlynumber(control){
            try
            {
                if (control.value.match(/^-?\d*\.?\d+$/)) {
                        return null;
                    } else {
                        return { 'onlynumber': true };
                    }
            }
            catch(error)
            {
            return null;
            }
    }
    static valueCheck(control){
            try
            {
                if (control.value>0) {
                    return null;
                } else {
                    return { 'valueCheck': true };
                }
            }
            catch(error)
            {
            return null;
            }
    }
    static ConfirmpasswordValidator(control:FormControl) {
            if(control.touched)
            {
                let formgroup:FormGroup=control._parent;
                let password:string=formgroup.controls["Password"].value ;
                if(password!==control.value)
                {
                    return { 'passwordnotmatch': true };
                }
            }
            return null;
        }
    static FiatprecisionValidation(control) {
            try
            {
                if (control.value.match(/^[0-9]+(\.[0-9]{1,8})?$/)) {
                    return null;
                } else {
                    return { 'Fiatprecision': true };
                }
            }
            catch(error)
            {
            return null;
            }
    }
    static CheckBalance(order,currency){
            return (control: AbstractControl): {[key: string]: any} => {
                if(order='Sell'){
                checkmybalance(control,order,currency).subscribe(res=>{
                ValidationmessageserviceService.messages=res;
                });
                }
                //console.log(ValidationmessageserviceService.messages);
                if(control.value > ValidationmessageserviceService.messages && order=='Sell'){
                    let reason='maxValue';
                     return { [reason]: true }
                }
                else
                {
                    ValidationmessageserviceService.messages=0;
                    return null;
                }
            }
      }
        static CheckBalanceINR(order,currency){
                let amount:number=0;
                return (control: FormControl): {[key: string]: any} => {
                    if(control.valueChanges)
                    {   
                        let formgroup:FormGroup=control._parent;
                        amount=formgroup.controls["Amount"].value;
                    }
                    if(order='Buy'){
                        checkmybalance(control,order,currency).subscribe(res=>{
                            ValidationmessageserviceService.newval=res;
                        });
                    }
                    //console.log( ValidationmessageserviceService.newval);
                    let total=0;
                    if(amount!=null)
                    {total=amount*control.value;}
                    if((control.value > ValidationmessageserviceService.newval && order=='Buy') || (total > ValidationmessageserviceService.newval && order=='Buy')){
                         let reason='balanceCheck';
                         return { [reason]: true }
                    }
                    ValidationmessageserviceService.newval=0;
                    return null;
                }
        }
}
interface mybalanceValidator {
}
function checkmybalance(control,order,currency) : any {
        let currencyType; 
        if(order=='Buy'){
                currencyType='INR';
        }
        else
        {
                currencyType=currency;
        }
        let injector = ReflectiveInjector.resolveAndCreate([
            Http,
        BrowserXhr,
            {provide: RequestOptions, useClass: BaseRequestOptions},
            {provide: ResponseOptions, useClass: BaseResponseOptions},
            {provide: ConnectionBackend, useClass: XHRBackend},
            {provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()},
        ]);
        let http = injector.get(Http);
            let headers = new Headers();
            let token:string= localStorage.getItem("_cashaacryptoAcessToken");
         headers.append('Authorization', `Basic ${token}`);
        let options = new RequestOptions({ headers: headers });
        return  http.get(`${AppSettings.API_ENDPOINT}getbalance?currencyType=${currencyType}`,options)
            .map(
                data => { 
            return  data.json().Balance;
            });
}
function checkmybalanceINR(control,order,currency) : any {
        let currencyType='INR'; 
        let injector = ReflectiveInjector.resolveAndCreate([
            Http,
        BrowserXhr,
            {provide: RequestOptions, useClass: BaseRequestOptions},
            {provide: ResponseOptions, useClass: BaseResponseOptions},
            {provide: ConnectionBackend, useClass: XHRBackend},
            {provide: XSRFStrategy, useFactory: () => new CookieXSRFStrategy()},
        ]);
        let http = injector.get(Http);
            let headers = new Headers();
            let token:string= localStorage.getItem("_cashaacryptoAcessToken");
        headers.append('Authorization', `Basic ${token}`);
        let options = new RequestOptions({ headers: headers });
        return  http.get(`${AppSettings.API_ENDPOINT}getbalance?currencyType=${currencyType}`,options)
            .map(
                data => {
            return  data.json().Balance;
            });
}