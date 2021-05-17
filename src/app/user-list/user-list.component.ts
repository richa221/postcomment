import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userlist :any[]=[];
 constructor(private userservice:UserserviceService) { }
  //constructor() { }
  ngOnInit(): void {
this.userservice.getuser().subscribe((result: any )=>{
  console.log( "result",result);
  this.userlist = result.data
  console.log('collection ',this.userlist);
})
   }
}
