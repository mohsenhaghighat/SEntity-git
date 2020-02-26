import { Component } from '@angular/core';
import { post } from '../model/post.model';

import { httpservice } from '../services/httpservice.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['../styles.scss']
})
export class ShowComponent   {

  columnDefs =[{headername:'name',field:'name'},
  {headername:'lastname',field:'lastname'},
  {headername:'age',field:'age'},
  {headername:'code',field:'code'}];
 /* rowData=[{name:'toyota',lastname:'cielo',age:35000,code:14},
  {name:'toyota',lastname:'chr',age:48000,code:7},
  {name:'toyota',lastname:'prado',age:35000,code:14}];
*/
rowData :any;
  posts :post[];

 
  constructor(private httpservice:httpservice) { }


  onfetchpost(){

this.httpservice.fetchpost().subscribe(
  (response:post[])=>{
    this.posts=response
    this.rowData=this.posts
  }
)

  }
}
