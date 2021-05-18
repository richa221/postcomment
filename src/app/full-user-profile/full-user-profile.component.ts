import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
@Component({
  selector: 'app-full-user-profile',
  templateUrl: './full-user-profile.component.html',
  styleUrls: ['./full-user-profile.component.css']
})
export class FullUserProfileComponent implements OnInit {
  userdetails :any;
  constructor(private userservice:UserserviceService,
    private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userservice.getUserDetail(id).subscribe((result: any )=>{
      this.userdetails = result
    })

  }
 

}
