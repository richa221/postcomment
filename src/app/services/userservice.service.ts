import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }
   getuser(){
    let url = "https://dummyapi.io/data/api/user?limit=10";
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('app-id','6099590c47e85e0ee9b5d38f');
    httpHeaders.set('Content-Type', 'application/json');    
    let options = {headers:httpHeaders};
    return this.http.get(url + 'testMethod',options)
   } 
 getUserDetail(id:any){
 let url =`${ "https://dummyapi.io/data/api/user"}/${id}`;
 let httpHeaders = new HttpHeaders();
 httpHeaders = httpHeaders.append('app-id','6099590c47e85e0ee9b5d38f');
 let options = {headers:httpHeaders};
   return this.http.get(url ,options);
  }
  getPostsList(){
    let url ="https://dummyapi.io/data/api/post?limit=10";
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('app-id','6099590c47e85e0ee9b5d38f');
    let options = {headers:httpHeaders};
    return this.http.get(url ,options);
  }
  getUserPosts(id:any){
    let url =`${"https://dummyapi.io/data/api/user"}/${id}/post?limit=10"`;
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('app-id','6099590c47e85e0ee9b5d38f');
    let options = {headers:httpHeaders};
    return this.http.get(url ,options);
  }
  getusercomment(postId :any){
    let url =`${"https://dummyapi.io/data/api/post"}/${postId}/comment?limit=10"`;
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('app-id','6099590c47e85e0ee9b5d38f');
    let options = {headers:httpHeaders};
    return this.http.get(url ,options);
  }
  getTagList(){
    let url ="https://dummyapi.io/data/api/tag?limit=10";
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('app-id','6099590c47e85e0ee9b5d38f');
    let options = {headers:httpHeaders};
    return this.http.get(url ,options);
  }
  getPostsByTag(tagname:any){
    let url =`${"https://dummyapi.io/data/api/tag"}/${tagname}/post?limit=10"`;
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('app-id','6099590c47e85e0ee9b5d38f');
    let options = {headers:httpHeaders};
    return this.http.get(url ,options);
  }

}


