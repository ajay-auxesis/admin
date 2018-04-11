import { LoaderService } from './../../../service/loader-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FeeRuleModel } from './../../../models/feeRule';
import { RulesService } from './../../../service/rules/rules.service';
import { Http, Response } from '@angular/http';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { CurrencyType } from './../../../enums/currency-type.enum';
import { Responsecode } from './../../../enums/responsecode.enum';
import { Config } from './../../../enums/config.enum';
import { FeeType } from './../../../enums/fee-type.enum';

@Component({
  selector: 'app-fee-rules',
  templateUrl: './fee-rules.component.html',
  styleUrls: ['./fee-rules.component.css']
})
export class FeeRulesComponent implements OnInit {
  feeRuleModel: FormGroup;
  currentCurrency:string = '' ;
  currentCurrencyId:string = '';
  currentFeeType:string = '';
  Currencies:string = '' ;
  fixedRule:string = '' ;
  percentRule:string = '' ;
  feeRuleResponse:Response;
  message:any;
  ruleList:any ;
  messagestatus:string = '' ;
  defaultFeeType:string = '' ;
  currencyTypeEnum:any;feetype
  //messagestatus:string = '' ;

  constructor( private _http: Http,private fb: FormBuilder,private _rulesService: RulesService,private _router: Router,private loaderService: LoaderService) { }

  ngOnInit() {
      let FeeTypeField = FeeType.Fixed ;
      this.defaultFeeType = this.currentFeeType = FeeTypeField.toString() ;
      this.feeRuleModel =this.fb.group({
        CurrencyType: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
        feetype: new FormControl(this.currentFeeType, [Validators.required, ValidationmessageserviceService.onlynumber]),
        withdrawFee: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
        depositFee: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
        minWithdrawLimit: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
        minDepositLimit: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
        maxWithdrawLimitPerDay: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      });
      let defaultFeeRuleCurreny:string = Config.defaultFeeRuleCurreny ;
      this.currentCurrency = Config.defaultFeeRuleCurreny;
      var id = this.currentCurrencyId = CurrencyType[this.currentCurrency];
      
      
      var currencyTypeoptions = Object.keys(CurrencyType);
      this.currencyTypeEnum = currencyTypeoptions.slice(0,currencyTypeoptions.length / 2);
      this.fixedRule= FeeType.Fixed.toString();
      this.percentRule= FeeType.Percentage.toString();

      this._rulesService.getFeeRules().debounceTime(1200).subscribe(result=>{
          var ruleArray = new Array();
          if(result.status=Responsecode.OK){
                var rules = result.json();
                // console.log(rules);
                if(rules){
                      for(let rule of rules){
                          ruleArray[rule.CurrencyType]= rule ;
                          if(rule.CurrencyType==CurrencyType[defaultFeeRuleCurreny]){
                             
                               this.setFormValue(rule);
                          } 
                      } 
                }
          }
          this.ruleList = ruleArray ;
          this.loaderService.displayLoader(false);
      },
      error => {
         this.loaderService.displayLoader(false);
      });
  }
  
  getCurrencyType(id:string){
      return CurrencyType[id] ;
  }
  
  onSubmit({ value, valid }: { value: FeeRuleModel, valid: boolean }) {
     let CurrencyTypeField:number = parseInt(value.CurrencyType) ;
    
     this._rulesService.postFeeRule(value).debounceTime(400).subscribe(result =>{
                  this.feeRuleResponse=result;
                    if(this.feeRuleResponse.status=Responsecode.Created)
                    {
                        this.ruleList[CurrencyTypeField] = value;
                        this.messagestatus = Config.Statussuccess ;
                        this.message="Fee rule saved successfully."
                        this.loaderService.displayLoader(false);
                    } else {
                      this.message="Fee rule could not updated. Try again."
                      this.messagestatus = Config.Statuserror ;
                    }
                    return false;  
            } ,
                  error =>{
                    if(error.status==Responsecode.Conflict)
                    {
                      this.messagestatus = Config.Statuserror ;
                      this.message="Fee rule for this currency already added." ;
                      this.loaderService.displayLoader(false);
                    }
            }); 
          
  }
  changeCurrency(id:string):any{
    this.currentCurrency = CurrencyType[id];
    this.currentCurrencyId = id;
    let CurrencyTypeField:number = parseInt(id) ;
    if( id in this.ruleList ) {
       
      // console.log(data.);
        this.setFormValue(this.ruleList[id]);
    } else {
        this.resetFormValue();
      
    }
  }
  setFormValue(formRule)
  {
      this.feeRuleModel.controls['withdrawFee'].setValue(formRule.withdrawFee);
      this.feeRuleModel.controls['depositFee'].setValue(formRule.depositFee);
      this.feeRuleModel.controls['minWithdrawLimit'].setValue(formRule.minWithdrawLimit);
      this.feeRuleModel.controls['minDepositLimit'].setValue(formRule.minDepositLimit);
      this.feeRuleModel.controls['maxWithdrawLimitPerDay'].setValue(formRule.maxWithdrawLimitPerDay);
      var feetype = formRule.feetype.toString();
      this.feeRuleModel.controls['feetype'].setValue(feetype); 
  }
resetFormValue()
  {
        this.feeRuleModel.reset();
        this.feeRuleModel.controls['feetype'].setValue(this.defaultFeeType); 
      /*  this.feeRuleModel.controls['withdrawFee'].setValue("");
        this.feeRuleModel.controls['depositFee'].setValue("");
        this.feeRuleModel.controls['minWithdrawLimit'].setValue("");
        this.feeRuleModel.controls['minDepositLimit'].setValue("");
        this.feeRuleModel.controls['maxWithdrawLimitPerDay'].setValue("");
        this.feeRuleModel.controls['feetype'].setValue("1");  */

  }

  feeTypeChange(id:string):any{
    console.log(id);
    this.currentFeeType = id;
  }
}
