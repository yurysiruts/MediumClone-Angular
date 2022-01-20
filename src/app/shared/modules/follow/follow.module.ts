import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { FollowComponent } from './components/follow/follow.component';
import { FollowService } from './services/follow.service';
import { FollowEffect } from './store/effects/follow.effect';

@NgModule({
  imports: [CommonModule, EffectsModule.forFeature([FollowEffect])],
  declarations: [FollowComponent],
  exports: [FollowComponent],
  providers: [FollowService],
})
export class FollowModule {}
