import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import {
  getArticleEditAction,
  getArticleEditFailureAction,
  getArticleEditSuccessAction,
} from '../actions/getArticle.action';

@Injectable()
export class GetArticleEditEffect {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleEditAction),
      switchMap(({ slug }) => {
        return this.sharedArticleService.getArticle(slug).pipe(
          map((article: ArticleInterface) => {
            return getArticleEditSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleEditFailureAction());
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService
  ) {}
}
