import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PostsService } from '../../services/posts.service';
import * as fromPostActions from '../actions/posts.action';

@Injectable({
  providedIn: 'root',
})
export class PostEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  @Effect()
  loadPosts$: Observable<Action> = this.actions$.pipe(
    ofType(fromPostActions.LOAD_POSTS),
    switchMap(() =>
      this.postsService.getPosts().pipe(
        map(
          (response) => {
            return new fromPostActions.LoadPostsSucces(response);
          },
          catchError((error) => of(new fromPostActions.LoadPostsFailed(error)))
        )
      )
    )
  );

  // ------------- ADDPOSTS ---------------------------------

  @Effect()
  createPosts$: Observable<Action> = this.actions$.pipe(
    ofType(fromPostActions.ADD_POSTS),
    map((action : fromPostActions.AddPosts) => action.payload),
    switchMap((payload) =>
      this.postsService.addPost(payload).pipe(
        map(
          (response) => {
            return new fromPostActions.AddPostsSucces(response);
          },
          catchError((error) => of(new fromPostActions.AddPostsFailed(error)))
        )
      )
    )
  );
}
