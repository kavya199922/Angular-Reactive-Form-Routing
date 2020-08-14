
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   url:string="http://localhost:4003/";

  constructor(private http:HttpClient) { 
  }
  
  public Login(phno:string) {
    return this.http.get(this.url+'login/'+phno);
  } 
  public ViewData():Observable<any>{
    return this.http.get(this.url+'/view')
  }

  
}


