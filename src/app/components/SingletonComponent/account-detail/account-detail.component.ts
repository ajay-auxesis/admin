import { LoaderService } from 'app/service/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankDetailsService } from './../../../service/bank-details/bank-details.service';
import { AccountType } from './../../../enums/account-type.enum';
@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {
  accountDetail:string = '' ;
  constructor(private _bankDetailsService:BankDetailsService,private loaderService: LoaderService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let params: any = this.activatedRoute.snapshot.params;
		var email = params.email ;
    this._bankDetailsService.getAccountDetail(email).debounceTime(1200).subscribe(result=>{
      let data = result.json();
       console.log(data);
      this.accountDetail = data;
      this.loaderService.displayLoader(false);
    },
    error => {
        this.loaderService.displayLoader(false);
    });

  }
   getAccountType(id:number){
    return AccountType[id];

    }

}
