import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { UpdateArticleActionTypes } from '../actionTypes';

export const getArticleEditAction = createAction(
  UpdateArticleActionTypes.GET_ARTICLE,
  props<{ slug: string }>()
);

export const getArticleEditSuccessAction = createAction(
  UpdateArticleActionTypes.GET_ARTICLE_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const getArticleEditFailureAction = createAction(
  UpdateArticleActionTypes.GET_ARTICLE_FAILURE
);
