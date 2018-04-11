import { LoaderService } from './../../../service/loader-service.service';
import { Component, OnInit,ElementRef, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TradingRulesModel } from './../../../models/tradingRules';
import { RulesService } from './../../../service/rules/rules.service';
import { SharedService } from './../../../service/shared.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { currencyPair } from './../../../enums/currency-pair.enum';
import { Responsecode } from './../../../enums/responsecode.enum';
import { Config } from './../../../enums/config.enum';
import { FeeType } from './../../../enums/fee-type.enum';

@Component({
  selector: 'app-trading-rules',
  templateUrl: './trading-rules.component.html',
  styleUrls: ['./trading-rules.component.css']
})
export class TradingRulesComponent implements OnInit {
  tradingRuleModel: FormGroup;
 // currentCurrency:string = '' ;
  currentCurrencyPairId:string = '';
  currentFeeType:string = '';
  Currencies:string = '' ;
  tradingRuleResponse:Response;
  CurrencyFirst:string = '' ;
  CurrencySecond:string = '' ;
  tradingRules:string = '';
  fixedRule:string = '' ;
  percentRule:string = '' ;
  message:any;
  messagestatus:string = '';
  currencyPairEnum:any;
  defaultFeeType:string='';
  ruleList:any ;
  constructor(private _http: Http,private fb: FormBuilder,private _rulesService: RulesService,private _router: Router,private loaderService: LoaderService) { }

  ngOnInit() {

     this.defaultFeeType = this.fixedRule= FeeType.Fixed.toString();
     
     this.tradingRuleModel =this.fb.group({
      currencypair: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      BuyerFee: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      SellerFee: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      minBuyAmountCurrencyOne: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      minBuyAmountCurrencytwo: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      BuyOrderBidLimit: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      SellOrderBidLimit: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      tradingtype: new FormControl(this.defaultFeeType, [Validators.required, ValidationmessageserviceService.onlynumber]),
      minSellAmountCurrencyOne: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
      minSellAmountCurrencyTwo: new FormControl('', [Validators.required, ValidationmessageserviceService.onlynumber]),
    });
   
    this.tradingRules = '' ;
    this.percentRule= FeeType.Percentage.toString();
    var currencyPairoptions = Object.keys(currencyPair);
    this.currencyPairEnum = currencyPairoptions.slice(0,currencyPairoptions.length / 2);
    let tradingDefaultCurrencyPair:string = Config.tradingDefaultCurrencyPair ;
    var ruleArray = new Array();
     this._rulesService.getTradingRules().debounceTime(1200).subscribe(result=>{
     
      if(result.status=Responsecode.OK){
        var rules = result.json();
        if(rules){
              for(let rule of rules){
                ruleArray[rule.currencypair]= rule ;
                  if(rule.currencypair==currencyPair[tradingDefaultCurrencyPair]){
                      this.tradingRules = rule ;
                  }
              } 
           }
       }
        this.ruleList =  ruleArray ;
	      this.loaderService.displayLoader(false);
    },
    error => {
       this.loaderService.displayLoader(false);
    });
    
    this.currentCurrencyPairId = currencyPair[tradingDefaultCurrencyPair];
    let  currencyPairArray =tradingDefaultCurrencyPair.split("_");
    this.CurrencyFirst = currencyPairArray[0];
    this.CurrencySecond = currencyPairArray[1];
    
  }

  getCurrencyPair(id:string){
        return currencyPair[id] ;
  }
  tradingTypeChange(id:string):any{
    this.currentFeeType = id;
  }
  changeCurrencyPair(id:string):any{
     this.currentCurrencyPairId = id;
     let currentCurrencyPair = currencyPair[this.currentCurrencyPairId];
     let  currencyPairArray =currentCurrencyPair.split("_");
     this.CurrencyFirst = currencyPairArray[0];
     this.CurrencySecond = currencyPairArray[1];
    
     if( id in this.ruleList ) {
        
          this.setFormValue(this.ruleList[id]);
      } else {
           this.resetFormValue();
      }
  }

  setFormValue(formRule)
  {   // console.log(formRule);
     this.tradingRuleModel.controls['BuyerFee'].setValue(formRule.BuyerFee);
      this.tradingRuleModel.controls['SellerFee'].setValue(formRule.SellerFee);
      this.tradingRuleModel.controls['minBuyAmountCurrencyOne'].setValue(formRule.minBuyAmountCurrencyOne);
      this.tradingRuleModel.controls['minBuyAmountCurrencytwo'].setValue(formRule.minBuyAmountCurrencytwo);
      this.tradingRuleModel.controls['BuyOrderBidLimit'].setValue(formRule.BuyOrderBidLimit);
      this.tradingRuleModel.controls['SellOrderBidLimit'].setValue(formRule.SellOrderBidLimit);
      this.tradingRuleModel.controls['minSellAmountCurrencyOne'].setValue(formRule.minSellAmountCurrencyOne);
      this.tradingRuleModel.controls['minSellAmountCurrencyTwo'].setValue(formRule.minSellAmountCurrencyTwo);
      var tradingtype = formRule.tradingtype.toString();
      this.tradingRuleModel.controls['tradingtype'].setValue(tradingtype); 
  
  }
resetFormValue()
{
      this.tradingRuleModel.reset();
      this.tradingRuleModel.controls['tradingtype'].setValue(this.defaultFeeType); 
  
}

  onSubmit({ value, valid }: { value: TradingRulesModel, valid: boolean }) {
      let currencyPairField = value.currencypair ;
      // console.log(value);
      this._rulesService.postTradingRules(value).debounceTime(400).subscribe(result =>{
                    this.tradingRuleResponse=result;
                      if(this.tradingRuleResponse.status=Responsecode.Created)
                      {
                        this.ruleList[currencyPairField] = value;
                        this.messagestatus = Config.Statussuccess ;
                        this.message="Trading rule saved successfully."
                        this.loaderService.displayLoader(false);
                      } else {
                        this.message="Trading rule could not updated. Try again"
                        this.messagestatus = Config.Statuserror ;
                      }
                      return false;  
              } ,
              error =>{
                      this.loaderService.displayLoader(false);
                      if(error.status==Responsecode.Conflict)
                      {
                        this.messagestatus = Config.Statuserror ;
                        this.message="Trading rule for this currency already added." ;
                      }

              }); 
  }

}
