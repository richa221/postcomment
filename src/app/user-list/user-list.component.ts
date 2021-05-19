import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist :any[]=[];
constructor(private userservice:UserserviceService , private router :Router) { }
ngOnInit(): void {
  this.userservice.getuser().subscribe((result: any )=>{
  this.userlist = result.data
  
})
   }
   id :any;
getid(id :any){
    this.router.navigate(['/userprofile',id]);
  }
  getPostId(id:any){
    this.router.navigate(['/userpost',id]);
  }
}
