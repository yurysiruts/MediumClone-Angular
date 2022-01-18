import { createAction, props } from '@ngrx/store';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { GetUserProfileActionType } from '../actionTypes';

export const getUserProfileAction = createAction(
  GetUserProfileActionType.GET_USER_PROFILE,
  props<{ slug: string }>()
);

export const getUserProfileSuccessAction = createAction(
  GetUserProfileActionType.GET_USER_PROFILE_SUCCESS,
  props<{ userProfile: ProfileInterface }>()
);

export const getUserProfileFailureAction = createAction(
  GetUserProfileActionType.GET_USER_PROFILE_SUCCESS
);
