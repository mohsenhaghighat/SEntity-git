import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { httpservice } from '../services/httpservice.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit   {
  
  signupform:FormGroup
  constructor(private httpservice:httpservice) { }

  ngOnInit() {
    this.signupform=new FormGroup({
      userdata:new FormGroup({
        iname:new FormControl(null,Validators.required),
        ilastname:new FormControl(null,Validators.required),
        iage:new FormControl(null,Validators.required),
        icode:new FormControl(null,Validators.required)
      })
     
    })
  }




  onsubmit(){
    console.log(this.signupform)
  }

}
