import { LoaderService } from 'app/service/loader-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BankDetailsService } from './../../../service/bank-details/bank-details.service';
import { AccountType } from './../../../enums/account-type.enum';
import 'rxjs/Rx';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  uesrlist:string = '' ;
  constructor(private _bankDetailsService:BankDetailsService,private _router: Router,private loaderService: LoaderService) { }

  ngOnInit() {
  
    this._bankDetailsService.getUsersList().debounceTime(1200).subscribe(result=>{
      let data = result.json();
      console.log(data);
      this.uesrlist = data;
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
