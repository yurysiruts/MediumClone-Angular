import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { PopularTagsService } from './services/popular-tags.service';
import { getTagsEffect } from './store/effects/getTags.effect';
import { tagsReducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([getTagsEffect]),
    StoreModule.forFeature('tags', tagsReducer),
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
