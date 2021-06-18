import { Users } from 'src/app/models/users/Users';
import * as fromUserActions from '../actions/users.action';

export interface UserState {
  data : Users[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: UserState = {
  data : [],
  loaded: false,
  loading: false,
  error: ''
}

export function reducer(state= initialState , action: fromUserActions.UsersActions) {
    switch(action.type){
      case fromUserActions.LOAD_USERS:
      return {
        ...state,
        loading: true,

      }

      case fromUserActions.LOAD_USER_SUCCESS: {
        const data = action.payload;
        return {
          ...state,
          loading: false,
          loaded: true,
          data
        }
       }
        case fromUserActions.LOAD_USER_FAILED: {

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

export const getUser = (state:UserState) => state.data;


