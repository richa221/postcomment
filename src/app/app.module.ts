import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { FullUserProfileComponent } from './full-user-profile/full-user-profile.component';
import { PostlistComponent } from './postlist/postlist.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { PostByTagComponent } from './post-by-tag/post-by-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    FullUserProfileComponent,
    PostlistComponent,
    UserPostsComponent,
    CommentListComponent,
    TagListComponent,
    PostByTagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDZ9jkWMehRwsN90SQnCA8BJxG1crbHgIY',
    
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
