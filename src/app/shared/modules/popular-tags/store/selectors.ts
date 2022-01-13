import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { TagsStateInterface } from './types/tagsState.interface';

export const TagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  TagsStateInterface
>('tags');

export const isLoadingSelector = createSelector(
  TagsFeatureSelector,
  (tagsState: TagsStateInterface) => tagsState.isLoading
);

export const ErrorSelector = createSelector(
  TagsFeatureSelector,
  (tagsState: TagsStateInterface) => tagsState.error
);

export const isTagsSelector = createSelector(
  TagsFeatureSelector,
  (tagsState: TagsStateInterface) => tagsState.data
);
