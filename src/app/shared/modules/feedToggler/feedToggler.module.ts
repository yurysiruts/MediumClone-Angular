import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FeedTogglerComponent } from './components/feedToggler.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FeedTogglerComponent],
  providers: [],
  exports: [FeedTogglerComponent],
})
export class FeedTogglerModule {}
