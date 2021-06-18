import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Post } from '../models/posts/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  public httpOpt = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=UTF-8',
    })
  }
  constructor(private http: HttpClient) { }


  getPosts(){
    return this.http.get<Post[]>(`${environment.url}/posts`)
  }

  addPost(post:Post){
      return this.http.post(`${environment.url}/posts`,JSON.stringify(post),this.httpOpt);
  }
}
