import { ActionReducerMap, createAction, createFeatureSelector, createReducer, createSelector } from '@ngrx/store';
import * as fromUserReducer from '../reducers/app.reducer';
import * as fromAlbumReducer from '../reducers/album.reducer';
import * as fromPostReducer from '../reducers/post.reducer';

export interface AppState {
  users : fromUserReducer.UserState,
  albums: fromAlbumReducer.AlbumState,
  posts: fromPostReducer.PostState,
}

export const reducers:ActionReducerMap<AppState, any> = {
  users : fromUserReducer.reducer,
  albums: fromAlbumReducer.reducer,
  posts: fromPostReducer.reducer,
}

export const getState = (state:any) => state;

// USERS
export const getUserState = createFeatureSelector<fromUserReducer.UserState>('users');
export const getUsers= createSelector(getUserState,fromUserReducer.getUser);

export const getUserByName = (name:string) => createSelector(getUsers,(users) => {
  if(users){
    var userFound = users.find(user => {return user.name.toLowerCase() === name.toLowerCase()
    });
    return userFound || {};
  }else {
    return {};
  }
});

// ALBUMS
export const getAlbumState = createFeatureSelector<fromAlbumReducer.AlbumState>('albums');
export const getAlbums= createSelector(getAlbumState,fromAlbumReducer.getAlbum);

// POSTS
export const getPostsState = createFeatureSelector<fromPostReducer.PostState>('posts');
export const getPosts= createSelector(getPostsState,fromPostReducer.getPost);





