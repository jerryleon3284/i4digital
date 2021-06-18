import { Action } from "@ngrx/store";
import { Post } from '../../models/posts/post';

export const LOAD_POSTS = '[Post] Load POSTS';
export const LOAD_POSTS_SUCCESS = '[Post] Load POSTS Succes';
export const LOAD_POSTS_FAILED = '[Post] Load POSTS Failed';

export const ADD_POSTS = '[Post] add POSTS';
export const ADD_POSTS_SUCCESS = '[Post] add POSTS Succes';
export const ADD_POSTS_FAILED = '[Post] add POSTS Failed';

//-------------- POSTS -----------------

export class LoadPosts implements Action {
  readonly type = LOAD_POSTS;
}

export class LoadPostsSucces implements Action {
  readonly type = LOAD_POSTS_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class LoadPostsFailed implements Action {
  readonly type = LOAD_POSTS_FAILED;
  constructor(public payload: any) {}
}

//-----------   ADD POSTS --------------------

export class AddPosts implements Action {
  readonly type = ADD_POSTS;
  constructor(public payload: Post) {}
}

export class AddPostsSucces implements Action {
  readonly type = ADD_POSTS_SUCCESS;
  constructor(public payload: any) {}
}

export class AddPostsFailed implements Action {
  readonly type = ADD_POSTS_FAILED;
  constructor(public payload: any) {}
}

export type PostActions =
LoadPosts       |
LoadPostsSucces |
LoadPostsFailed |
AddPosts |
AddPostsSucces |
AddPostsFailed ;
