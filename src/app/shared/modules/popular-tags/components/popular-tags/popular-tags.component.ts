import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { getTagsAction } from '../../store/actions/getTags.actions';
import {
  isLoadingSelector,
  ErrorSelector,
  isTagsSelector,
} from '../../store/selectors';
import { PopularTagsResponseInterface } from '../../store/types/popularTagsResponse.interface';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
})
export class PopularTagsComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  tags$: Observable<PopularTagType[] | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchTags();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(ErrorSelector));
    this.tags$ = this.store.pipe(select(isTagsSelector));
  }

  fetchTags(): void {
    this.store.dispatch(getTagsAction());
  }
}
