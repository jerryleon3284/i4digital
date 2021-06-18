import { Post } from '../../models/posts/post';
import * as fromPostActions from '../actions/posts.action';

export interface PostState {
  data : Post[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: PostState = {
  data : [],
  loaded: false,
  loading: false,
  error: ''
}

export function reducer(state= initialState , action: fromPostActions.PostActions) {
    switch(action.type){
      case fromPostActions.LOAD_POSTS:
      return {
        ...state,
        loading: true,

      }

      case fromPostActions.LOAD_POSTS_SUCCESS: {
        const data = action.payload;
        return {
          ...state,
          loading: false,
          loaded: true,
          data
        }
       }
        case fromPostActions.LOAD_POSTS_FAILED: {

          return {
            ...state,
            loading: false,
            loaded: false,
            error: action.payload

          }
        }

        case fromPostActions.ADD_POSTS_SUCCESS: {
          return {
            ...state,
            data: [...state.data,action.payload]
          }
        }

        case fromPostActions.ADD_POSTS_FAILED: {
          return {
            ...state,
            error: action.payload
          }
        }
      default: {
        return state;
      }
    }

}

export const getPost = (state:PostState) => state.data;


