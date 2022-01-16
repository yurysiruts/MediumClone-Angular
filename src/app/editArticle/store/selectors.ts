import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { EditArticleStateInterface } from './types/createArticleState.interface';

export const EditArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditArticleStateInterface
>('editArticle');

export const isSubmittingArticleEditSelector = createSelector(
  EditArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isSubmitting
);

export const ErrorsArticleEditSelector = createSelector(
  EditArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) =>
    editArticleState.validationErrors
);

export const isLoaingArticleEditSelector = createSelector(
  EditArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.isLoading
);

export const articleEditSelector = createSelector(
  EditArticleFeatureSelector,
  (editArticleState: EditArticleStateInterface) => editArticleState.article
);
