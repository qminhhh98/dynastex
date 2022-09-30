import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { getData, getDataError, getDataSuccess } from '../actions/data.action';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { DataService } from '../service/data.service';

@Injectable()
export class DataEffects {
  loadData$ = createEffect(() =>
    this.action$.pipe(
      ofType(getData),
      switchMap(() =>
        this.dataService.getData().pipe(
          map(
            (data) => {
              console.log('effect', 'call action getDataSuccess')
              return getDataSuccess({ data });
            },
            catchError((error) => of(getDataError({ error })))
          )
        )
      ),
      tap(() => console.log('effect', 'loadData'))
    )
  );

  constructor(private action$: Actions, private dataService: DataService) {}
}
