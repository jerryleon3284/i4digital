import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { Album } from './models/albums/album';
import { AlbumComponent } from './components/album/album.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full'},
  { path: 'user', component: UsersComponent,  pathMatch: 'full'},
  { path: 'album', component: AlbumComponent,  pathMatch: 'full'},
  { path: 'post', component: PostsComponent,  pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
