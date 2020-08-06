import {  HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'post-data',
    template:`<h1>{{jsonData}}</h1><h1>hi</h1>`
})
export class PostdataComponent  {
    url='https://httpbin.org/post'
    postData={
        test:'simple test'
    }
    jsonData;
    constructor(private http:HttpClient) {
    this.http.post(this.url,this.postData).toPromise().then((data:any)=>{
        this.jsonData=(data.json.test);
        console.log(data)
    })
     }

    
}
