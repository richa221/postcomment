import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-post-by-tag',
  templateUrl: './post-by-tag.component.html',
  styleUrls: ['./post-by-tag.component.css']
})
export class PostByTagComponent implements OnInit {
  posttag :any[]=[];
  constructor(private userservice:UserserviceService , private router :Router,
    private route:ActivatedRoute) { }
    tagname :string;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => { 
      this.tagname = params.get('id'); 
  });
    this.userservice.getPostsByTag(this.tagname).subscribe((result: any )=>{
    this.posttag = result.data
    // console.log('post tag ',this.posttag);
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