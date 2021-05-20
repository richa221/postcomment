import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  postlist :any[]=[]
  constructor(private userservice:UserserviceService,private router:Router) { }
  ngOnInit(): void {
    this.userservice.getPostsList().subscribe((result: any )=>{
      this.postlist = result.data
      // console.log('post list',this.postlist);
      
    })
  }
  id :any;
  getid(id :any){
      this.router.navigate(['/userprofile',id]);
    }

}
