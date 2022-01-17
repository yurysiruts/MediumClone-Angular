import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { SettingsStateInterface } from './settingsState.interface';

export const SettingsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  SettingsStateInterface
>('editArticle');

export const isSubmittingSettingsSelector = createSelector(
  SettingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.isSubmitting
);

export const ErrorsSettingsSelector = createSelector(
  SettingsFeatureSelector,
  (settingsState: SettingsStateInterface) => settingsState.validationErrors
);
