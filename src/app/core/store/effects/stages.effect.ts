import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { AssetsService } from '../../services/assets.service';
import * as stageActions from '../actions/stages.action';

@Injectable()
export class StagesEffects {

  @Effect()
  loadStages$ = this.actions$
    .ofType(stageActions.LOAD_STAGES)
    .pipe(
      switchMap(() => {
        return this.assetsService
          .stages()
          .pipe(
            map(aCategories => new stageActions.LoadStagesSuccess(aCategories)),
            catchError(error => of(new stageActions.LoadStagesFail(error)))
          )
      })
    );

  constructor(private actions$: Actions,
              private assetsService: AssetsService
  ) {
  }
}