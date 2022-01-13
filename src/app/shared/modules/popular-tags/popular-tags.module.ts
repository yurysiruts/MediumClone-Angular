import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../errorMessage/errorMessage.module';
import { LoadingModule } from '../loading/loading.module';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { PopularTagsService } from './services/popular-tags.service';
import { getTagsEffect } from './store/effects/getTags.effect';
import { tagsReducer } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([getTagsEffect]),
    StoreModule.forFeature('tags', tagsReducer),
    ErrorMessageModule,
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  providers: [PopularTagsService],
})
export class PopularTagsModule {}
