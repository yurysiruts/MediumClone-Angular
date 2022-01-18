import { createAction, props } from '@ngrx/store';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { FavoritesActionTypes } from '../actionTypes';

export const addToFavoritesAction = createAction(
  FavoritesActionTypes.ADD_TO_FAVORITES,
  // we need isFavorited to know what service method to call in effects
  props<{ isFavorited: boolean; slug: string }>()
);

export const addToFavoritesSuccessAction = createAction(
  FavoritesActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInterface }>()
);

export const addToFavoritesFailureAction = createAction(
  FavoritesActionTypes.ADD_TO_FAVORITES_FAILURE
);
