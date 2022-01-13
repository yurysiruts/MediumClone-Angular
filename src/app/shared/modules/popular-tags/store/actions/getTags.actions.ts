import { createAction, props } from '@ngrx/store';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { ActionTypes } from '../actionTypes';

export const getTagsAction = createAction(ActionTypes.GET_TAGS);

export const getTagsSuccessAction = createAction(
  ActionTypes.GET_TAGS_SUCCESS,
  props<{ tags: PopularTagType[] }>()
);

export const getTagsFailureAction = createAction(ActionTypes.GET_TAGS_FAILURE);
