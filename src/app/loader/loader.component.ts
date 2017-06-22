import { LoaderService } from './../service/loader-service.service';
import { SharedService } from './../service/shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
objLoaderStatus: Boolean;
  constructor(private _shared: SharedService, private loaderService: LoaderService) {
    this.objLoaderStatus=false; 
   }

  ngOnInit() {
     
    this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });
  }

}
