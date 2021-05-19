import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import {  Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  postlist :any[]=[]
  constructor(private userservice:UserserviceService,
    private router:Router,
    private route:ActivatedRoute) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userservice.getUserPosts(id).subscribe((result: any )=>{
      this.postlist = result.data
      console.log('user post',this.postlist);
      
    })
  }
  id :any;
  getid(id :any){
      this.router.navigate(['/userprofile',id]);
    }

}