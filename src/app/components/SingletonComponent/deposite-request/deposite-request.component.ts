import { LoaderService } from 'app/service/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './../../../service/order/order.service';
import { FiatpaymentMode } from './../../../enums/fiatpayment-mode.enum';
import { Responsecode } from './../../../enums/responsecode.enum';
import { Config } from './../../../enums/config.enum';

@Component({
  selector: 'app-deposite-request',
  templateUrl: './deposite-request.component.html',
  styleUrls: ['./deposite-request.component.css']
})
export class DepositeRequestComponent implements OnInit {
  orderslist:string = '' ;
  updateRowId:string = '' ;
  updateRowStatus:string = '' ;
  message:string = '' ;
  messagestatus:string = '' ;

  constructor(private _orderService:OrderService,private _router: Router,private loaderService: LoaderService) { }

  ngOnInit() {
      this.updateRowId ='null' ;
      this.updateRowStatus ='' ;
      this.message ='' ;
      this.messagestatus ='' ;
      this._orderService.getDepositRequest().debounceTime(1200).subscribe(result=>{
        let data = result.json();
        // console.log(FiatpaymentMode[1]);
        this.orderslist =data;
        this.loaderService.displayLoader(false);
      },
      error => {
        this.loaderService.displayLoader(false);
      });
  }
  getFiatpayment(id:number):any
  {
        return FiatpaymentMode[id];
  }

  changeOrderStatus(orderId,status,rowId){
            if(confirm("Are you sure to delete ?")) {
                  this._orderService.changeOrderStatus(orderId,status).debounceTime(1200).subscribe(result=>{
                    if(result.status==Responsecode.Created) {
                      this.updateRowId = rowId ;
                      this.updateRowStatus = status ;
                      this.messagestatus = Config.Statussuccess;
                      this.message ='Deposite status update successfully.' ;
                    } else {
                      this.messagestatus = Config.Statuserror  ;
                      this.message ='Deposite status not updated.Please try again.' ;
                    }
                      this.loaderService.displayLoader(false);
                  },
                  error => {
                      this.messagestatus = Config.Statuserror ;
                      this.message ='Deposite status not updated.Please try again.' ;
                      this.loaderService.displayLoader(false);
                  });
            }
      
    }
}
