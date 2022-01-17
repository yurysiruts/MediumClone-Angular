import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { SettingsStateInterface } from './settingsState.interface';

export const SettingsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingsStateInterface
>('editArticle');

export const isSubmittingArticleEditSelector = createSelector(
  SettingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const ErrorsArticleEditSelector = createSelector(
  SettingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);
