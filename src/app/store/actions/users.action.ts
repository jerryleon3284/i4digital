import { Action } from '@ngrx/store';
import { Users } from 'src/app/models/users/Users';

export const LOAD_USERS = '[User] Load Users';
export const LOAD_USER_SUCCESS = '[User] Load Users Succes';
export const LOAD_USER_FAILED = '[User] Load Users Failed';

export class LoadUser implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUserSucces implements Action {
  readonly type = LOAD_USER_SUCCESS;
  constructor(public payload: Users[]) {}
}

export class LoadUserFailed implements Action {
  readonly type = LOAD_USER_FAILED;
  constructor(public payload: any) {}
}
export type UsersActions =
LoadUser       |
LoadUserSucces |
LoadUserFailed;


