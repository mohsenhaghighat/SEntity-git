import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class httpservice{
constructor(private httpclient :HttpClient){}

fetchpost(){
    return this.httpclient.get('http://localhost:4200/assets/countries.json')
}

} 

