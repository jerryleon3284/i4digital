import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 // dato$: Observable<any>;


  constructor(public store: Store<fromStore.AppState>){}


  ngOnInit(){
    this.store.dispatch(new fromStore.LoadUser());
    this.store.dispatch(new fromStore.LoadAlbum());
    this.store.dispatch(new fromStore.LoadPosts());
  }
}
