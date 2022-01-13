import { createReducer, on } from '@ngrx/store';
import {
  getTagsAction,
  getTagsFailureAction,
  getTagsSuccessAction,
} from './actions/getTags.actions';
import { TagsStateInterface } from './types/tagsState.interface';

const initialState: TagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const tagsReducer = createReducer(
  initialState,
  on(
    getTagsAction,
    (state): TagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getTagsSuccessAction,
    (state, action): TagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.tags,
    })
  ),
  on(
    getTagsFailureAction,
    (state): TagsStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);
