import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import * as fromUserActions from '../actions/users.action';
import { UsersService } from '../../services/users.service';

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(private actions$: Actions, private usersService: UsersService) {}

  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(fromUserActions.LOAD_USERS),
    switchMap(() =>
      this.usersService.getUsers().pipe(
        map(
          (response) => {
            return new fromUserActions.LoadUserSucces(response);
          },
          catchError((error) => of(new fromUserActions.LoadUserFailed(error)))
        )
      )
    )
  );
}
