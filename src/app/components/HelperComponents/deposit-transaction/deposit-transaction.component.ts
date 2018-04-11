import { Component, OnInit } from '@angular/core';
import 'rxjs/Rx';

require( 'datatables.net-buttons/js/buttons.colVis.js' );
require( 'datatables.net-buttons/js/buttons.html5.js' ); 
require( 'datatables.net-buttons/js/buttons.flash.js' ); 
require( 'datatables.net-buttons/js/buttons.print.js' );

var $       = require( 'jquery' );
var dt      = require( 'datatables.net' );
@Component({
  selector: 'app-deposit-transaction',
  templateUrl: './deposit-transaction.component.html',
  styleUrls: ['./deposit-transaction.component.css']
})
export class DepositTransactionComponent implements OnInit {

 id:any="userlist";
  constructor() { }

  ngOnInit() {


var newid='#'+this.id;

setTimeout(function () {
$(newid).DataTable({
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
},10);
  }

}
