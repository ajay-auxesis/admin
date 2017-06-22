import { Observable } from 'rxjs/Rx';
import { SharedService } from './service/shared.service';
import { Component } from '@angular/core';
import { LoaderService } from "./service/loader-service.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 objLoaderStatus: boolean;
  constructor(private _sharedservice: SharedService, private loaderService: LoaderService) { 
  this.objLoaderStatus=false; 
    
  }
  title = 'app works!';

 ngOnInit() {

this.loaderService.loaderStatus.subscribe((val: boolean) => {
            this.objLoaderStatus = val;
        });

     
    }

    ngAfterViewChecked() {
    
  }
}
