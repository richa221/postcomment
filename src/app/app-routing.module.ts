import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullUserProfileComponent } from './full-user-profile/full-user-profile.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'', component:UserListComponent},
  {path:'userprofile', component:FullUserProfileComponent},
  {path:'', component:UserListComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
