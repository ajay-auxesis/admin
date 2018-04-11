import { LoaderService } from 'app/service/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from './../../../service/order/order.service';
import { Responsecode } from './../../../enums/responsecode.enum';
import { Config } from './../../../enums/config.enum';

@Component({
  selector: 'app-withdraw-request',
  templateUrl: './withdraw-request.component.html',
  styleUrls: ['./withdraw-request.component.css']
})
export class WithdrawRequestComponent implements OnInit {
  orderslist:string = '' ;
  updateRowId:string = '' ;
  updateRowStatus:string = '' ;
  message:string = '' ;
  messagestatus:string = '' ;
  
  constructor(private _orderService:OrderService,private _router: Router,private loaderService: LoaderService) { }

  ngOnInit() {
    this.updateRowId ='A' ;
    this.updateRowStatus ='' ;
    this.message ='' ;
    this.messagestatus ='' ;
     this._orderService.getWithdrawRequest().debounceTime(1200).subscribe(result=>{
      let data = result.json();
       // console.log(data);
       this.orderslist = data;
       this.loaderService.displayLoader(false);
    },
    error => {
       this.loaderService.displayLoader(false);
    });
  }

  changeOrderStatus(orderId,status,rowId){

        if(confirm("Are you sure to delete ?")) {
              this._orderService.changeOrderStatus(orderId,status).debounceTime(1200).subscribe(result=>{
             
                if(result.status==Responsecode.Created) {
                  this.updateRowId = rowId ;
                  this.updateRowStatus = status ;
                  this.messagestatus = Config.Statussuccess;
                  this.message ='Withdraw status update successfully.' ;
                } else {
                  this.messagestatus = Config.Statuserror  ;
                  this.message ='Withdraw status not updated.Please try again.' ;
                }
                // this.userslist =data;
                  this.loaderService.displayLoader(false);
              },
              error => {
                  this.messagestatus = Config.Statuserror ;
                  this.message ='Withdraw status not updated.Please try again.' ;
                  this.loaderService.displayLoader(false);
              });
        }
   }

}
