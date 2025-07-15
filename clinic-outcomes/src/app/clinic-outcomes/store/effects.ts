import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import {
  loadGmi,
  loadGmiSuccess,
  loadTimeInRange,
  loadTimeInRangeSuccess,
} from './action';
import { ClinicService } from './../../services/clinic-service';

@Injectable()
export class ClinicEffects {
  private actions$ = inject(Actions);
  private service = inject(ClinicService);

  loadTimeInRange$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTimeInRange),
      switchMap(() =>
        this.service
          .getTimeInRange()
          .pipe(map((time) => loadTimeInRangeSuccess({ time })))
      )
    )
  );

  loadGmi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGmi),
      switchMap(() =>
        this.service.getGMI().pipe(map((gmi) => loadGmiSuccess({ gmi })))
      )
    )
  );
}
