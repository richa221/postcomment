import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
   taglist :any[]=[]
  constructor(private userservice:UserserviceService,
    private router:Router) { }

  ngOnInit(): void {
    this.userservice.getTagList().subscribe((result: any )=>{
      this.taglist = result.data
      // console.log('tag list',this.taglist);
      
    })
  }
  getid(id :string){
    // console.log("tag pass ",id);
    this.router.navigate(['/postbytag',id]);
  }

}
