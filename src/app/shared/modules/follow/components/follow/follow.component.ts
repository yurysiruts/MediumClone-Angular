import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { followAction } from '../../store/actions/follow.action';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
})
export class FollowComponent implements OnInit {
  @Input('user') userProfileProps: ProfileInterface;

  isFollowed: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isFollowed = this.userProfileProps.following;
    console.log('user:', this.userProfileProps);
  }

  handleFollow() {
    this.store.dispatch(
      followAction({
        isFollowed: this.isFollowed,
        slug: this.userProfileProps.username,
      })
    );
    // optimistic update
    this.isFollowed = !this.isFollowed;
  }
}
