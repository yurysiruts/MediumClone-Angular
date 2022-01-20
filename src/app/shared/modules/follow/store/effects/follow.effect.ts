import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { FollowService } from '../../services/follow.service';
import {
  followAction,
  followFailureAction,
  followSuccessAction,
} from '../actions/follow.action';

@Injectable()
export class FollowEffect {
  follow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(followAction),
      switchMap(({ isFollowed, slug }) => {
        const follow$ = isFollowed
          ? this.followService.unFollow(slug)
          : this.followService.follow(slug);

        return follow$.pipe(
          map((profile: ProfileInterface) => {
            return followSuccessAction({ profile });
          }),
          catchError(() => {
            return of(followFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private followService: FollowService
  ) {}
}
