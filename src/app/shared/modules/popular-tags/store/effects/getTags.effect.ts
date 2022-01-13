import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { PopularTagsResponseInterface } from 'src/app/shared/modules/popular-tags/store/types/popularTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { PopularTagsService } from '../../services/popular-tags.service';
import {
  getTagsAction,
  getTagsSuccessAction,
  getTagsFailureAction,
} from '../actions/getTags.actions';

@Injectable()
export class getTagsEffect {
  getTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTagsAction),
      switchMap(() => {
        return this.popularTagsService.getTags().pipe(
          map((tags: PopularTagType[]) => {
            return getTagsSuccessAction({ tags });
          }),
          catchError(() => {
            return of(getTagsFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private popularTagsService: PopularTagsService
  ) {}
}
