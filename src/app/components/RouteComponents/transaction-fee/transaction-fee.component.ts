
import { Component, OnInit, Input, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core';
import { DataTableModule } from "angular2-datatable";
// import { AddCurrencyComponent } from "app/components/RouteComponents/add-currency/add-currency.component";
 import 'rxjs/Rx';
 require( 'datatables.net-buttons/js/buttons.colVis.js' );
 require( 'datatables.net-buttons/js/buttons.html5.js' ); 
 require( 'datatables.net-buttons/js/buttons.flash.js' ); 
 require( 'datatables.net-buttons/js/buttons.print.js' );
 
 var $       = require( 'jquery' );
 var dt      = require( 'datatables.net' );
 
@Component({
  selector: 'app-transaction-fee',
  templateUrl: './transaction-fee.component.html',
  styleUrls: ['./transaction-fee.component.css']
})
export class TransactionFeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      setTimeout(function () {
        $("#currencydetail").DataTable({
          dom: 'Bfrtip',
              buttons: [
                    'copy',{
                  extend: 'pdf',
                  exportOptions: {
                  columns: [1,2,3,4,5,6,7,8]
                    }
              },{
                  extend: 'csv',
                  exportOptions: {
                  columns: [1,2,3,4,5,6,7,8]
                    }
              },{
                  extend: 'excel',
                    exportOptions: {
                  columns: [1,2,3,4,5,6,7,8]
                    }
              }   
                ]
            } );
        },3000);
  }

}
