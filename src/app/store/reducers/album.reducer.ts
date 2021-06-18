import * as fromAlbumActions from '../actions/albums.action';
import { Album } from '../../models/albums/album';

export interface AlbumState {
  data : Album[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: AlbumState = {
  data : [],
  loaded: false,
  loading: false,
  error: ''
}

export function reducer(state= initialState , action: fromAlbumActions.AlbumActions) {
    switch(action.type){
      case fromAlbumActions.LOAD_ALBUMS:
      return {
        ...state,
        loading: true,

      }

      case fromAlbumActions.LOAD_ALBUM_SUCCESS: {
        const data = action.payload;
        return {
          ...state,
          loading: false,
          loaded: true,
          data
        }
       }
        case fromAlbumActions.LOAD_ALBUM_FAILED: {

          return {
            ...state,
            loading: false,
            loaded: false,
            error: action.payload

          }
        }
      default: {
        return state;
      }
    }

}

export const getAlbum = (state:AlbumState) => state.data;


