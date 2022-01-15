import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { ArticleStateInterface } from '../types/articleState.interface';

export const ArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('article');

export const isLoadingArticleSelector = createSelector(
  ArticleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);

export const ErrorArticleSelector = createSelector(
  ArticleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);

export const articleSelector = createSelector(
  ArticleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);
