import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { AlbumsService } from '../../services/albums.service';
import * as fromAlbumActions from '../actions/albums.action';

@Injectable({
  providedIn: 'root',
})
export class AlbumEffects {
  constructor(private actions$: Actions, private albumsService: AlbumsService) {}

  @Effect()
  loadAlbums$: Observable<Action> = this.actions$.pipe(
    ofType(fromAlbumActions.LOAD_ALBUMS),
    switchMap(() =>
      this.albumsService.getAlbums().pipe(
        map(
          (response) => {
            return new fromAlbumActions.LoadAlbumSucces(response);
          },
          catchError((error) => of(new fromAlbumActions.LoadAlbumFailed(error)))
        )
      )
    )
  );
}
