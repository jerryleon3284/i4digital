import { Action } from "@ngrx/store";
import { Album } from '../../models/albums/album';

export const LOAD_ALBUMS = '[Album] Load ALBUMS';
export const LOAD_ALBUM_SUCCESS = '[Album] Load ALBUMS Succes';
export const LOAD_ALBUM_FAILED = '[Album] Load ALBUMS Failed';

//-------------- ALBUM -----------------

export class LoadAlbum implements Action {
  readonly type = LOAD_ALBUMS;
}

export class LoadAlbumSucces implements Action {
  readonly type = LOAD_ALBUM_SUCCESS;
  constructor(public payload: Album[]) {}
}

export class LoadAlbumFailed implements Action {
  readonly type = LOAD_ALBUM_FAILED;
  constructor(public payload: any) {}
}
export type AlbumActions =
LoadAlbum       |
LoadAlbumSucces |
LoadAlbumFailed;

