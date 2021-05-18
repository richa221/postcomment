import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullUserProfileComponent } from './full-user-profile/full-user-profile.component';
import { PostlistComponent } from './postlist/postlist.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'', component:UserListComponent},
  {path:'userprofile/:id', component:FullUserProfileComponent},
  {path:'postlist', component:PostlistComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
