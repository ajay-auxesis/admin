
import {CurrencyType } from 'app/enums/currency-type.enum';
import { PaymentOperationMode } from "app/enums/payment-operation-mode.enum";

export class DepositModel {

Amount:number;
CurrencyType:CurrencyType;
Type:PaymentOperationMode;

}

export class RawleadgerDto {

RawLeadgerList:Array<RawLeadgerListdto>;


}

export class RawLeadgerListdto {

Amount:number;
currency:CurrencyType;
Type:PaymentOperationMode;
length:number;

}

export class ShowBalanceModel {

Currency:CurrencyType;
Type:PaymentOperationMode;

}