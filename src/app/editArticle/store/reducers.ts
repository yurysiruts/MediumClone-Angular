import { createReducer, on } from '@ngrx/store';
import {
  updateArticleEditAction,
  updateArticleEditFailureAction,
  updateArticleEditSuccessAction,
} from './actions/editArticle.action';
import {
  getArticleEditAction,
  getArticleEditFailureAction,
  getArticleEditSuccessAction,
} from './actions/getArticle.action';
import { EditArticleStateInterface } from './types/createArticleState.interface';

const initialState: EditArticleStateInterface = {
  isSubmitting: false,
  isLoading: false,
  validationErrors: null,
  article: null,
};

export const editArticleReducer = createReducer(
  initialState,
  on(
    updateArticleEditAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    updateArticleEditSuccessAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: null,
    })
  ),
  on(
    updateArticleEditFailureAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getArticleEditAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleEditSuccessAction,
    (state, action): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleEditFailureAction,
    (state): EditArticleStateInterface => ({
      ...state,
      isLoading: false,
    })
  )
);
