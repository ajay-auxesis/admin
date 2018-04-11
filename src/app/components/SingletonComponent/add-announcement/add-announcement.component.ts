import { AnnouncementModel } from './../../../models/announcement';
import { Http, Response } from '@angular/http';
import { LoaderService } from 'app/service/loader-service.service';
import { Router } from '@angular/router';
import { ValidationmessageserviceService } from './../../../service/validationmessageservice.service';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ElementRef } from '@angular/core';
import { AnnouncementService } from './../../../service/announcement/announcement.service';
import { Responsecode } from './../../../enums/responsecode.enum';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {

  AnnouncementFormModel: FormGroup;
  announcementResponse:Response;
  _errormsg:any;
  constructor(private _fb: FormBuilder,private loaderService: LoaderService,private _announcementService:AnnouncementService,private _router: Router) { }

  ngOnInit() {
    this.AnnouncementFormModel =this._fb.group({
      Subject:new FormControl('', [Validators.required]),
      Message:new FormControl('', [Validators.required]),
    });
  }

  onSubmit({ value, valid }: { value: AnnouncementModel, valid: boolean }) {
    console.log(value);
      this._announcementService.postAnnouncement(value).debounceTime(400).subscribe(result =>{
              this.announcementResponse=result;
                    if(this.announcementResponse.status=Responsecode.Created)
                    {
                        this._errormsg="Announcement successfully."
                        this.loaderService.displayLoader(false);
                        this._router.navigate(['announcement-list']);
                    }
                    return false;  
               },
                  error =>{
                    if(error.status==409)
                    {
                       this._errormsg="Fee rule for this currency already added." ;
                       this.loaderService.displayLoader(false);
                    }

          }); 
          
  }

}
