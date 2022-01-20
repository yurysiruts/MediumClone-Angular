import { createAction, props } from '@ngrx/store';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { FollowActionTypes } from '../actionTypes';

export const followAction = createAction(
  FollowActionTypes.FOLLOW,
  // we need isFollowed to know what service method to call in effects
  props<{ isFollowed: boolean; slug: string }>()
);

export const followSuccessAction = createAction(
  FollowActionTypes.FOLLOW_SUCCESS,
  props<{ profile: ProfileInterface }>()
);

export const followFailureAction = createAction(
  FollowActionTypes.FOLLOW_FAILURE
);
