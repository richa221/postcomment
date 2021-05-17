import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 url = "https://dummyapi.io/data/api/user?limit=10";
  constructor(private http:HttpClient) { }
   getuser(){
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('app-id','6099590c47e85e0ee9b5d38f');
    httpHeaders.set('Content-Type', 'application/json');    
    let options = {headers:httpHeaders};
    return this.http.get(this.url + 'testMethod',options)
   }

}


