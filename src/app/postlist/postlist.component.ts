import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  postlist :any[]=[]
  constructor(private userservice:UserserviceService) { }
  ngOnInit(): void {
    this.userservice.getPostsList().subscribe((result: any )=>{
      this.postlist = result.data
      console.log('post list',this.postlist);
      
    })
  }

}
