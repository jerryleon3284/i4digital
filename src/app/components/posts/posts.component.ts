import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../../models/posts/post';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/store';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  post: Post= {};

  display:string='none';
  constructor(public store: Store<fromStore.AppState>) {
    store.select(fromStore.getPosts).subscribe((res) => {
      this.posts = res;
    }); }

  ngOnInit(): void {
  }

  addPost(form: NgForm){
    
    debugger;
    let userId = new Date().getTime();
    let newPost = form.value;
    newPost['id'] = userId;
    newPost['userId'] = userId;

    if(newPost && newPost.title){
       this.store.dispatch(new fromStore.AddPosts(newPost));
       this.closeModal(form);
    }

  }

  closeModal(form:NgForm){
    form.reset;
    this.display = 'none';

  }

  openModalDialog(){
      this.display = 'block';
  }

}
