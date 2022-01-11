import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { feedComponent } from './components/feed/feed.component';
import { FeedService } from './services/globalFeed.service';
import { getFeedEffect } from './store/effects/getFeed.effect';
import { feedReducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([getFeedEffect]),
    StoreModule.forFeature('feed', feedReducer),
    RouterModule,
  ],
  declarations: [feedComponent],
  exports: [feedComponent],
  providers: [FeedService],
})
export class FeedModule {}
