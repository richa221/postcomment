import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  postlist :any[]=[]
  constructor(private userservice:UserserviceService,private router:Router) { }
  ngOnInit(): void {
    this.userservice.getPostsList().subscribe((result: any )=>{
      this.postlist = result.data
      console.log('post list',this.postlist);
      
    })
  }

}
