import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { FullUserProfileComponent } from './full-user-profile/full-user-profile.component';
import { PostByTagComponent } from './post-by-tag/post-by-tag.component';
import { PostlistComponent } from './postlist/postlist.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserPostsComponent } from './user-posts/user-posts.component';

const routes: Routes = [
  {path:'', component:UserListComponent},
  {path:'userprofile/:id', component:FullUserProfileComponent},
  {path:'postlist', component:PostlistComponent},
  {path:'userpost/:id', component:UserPostsComponent},
  {path:'commentlist', component:CommentListComponent},
  {path:'taglist', component:TagListComponent},
  {path:'postbytag/:id', component:PostByTagComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
