import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { updateArticleEditAction } from '../../store/actions/editArticle.action';
import { getArticleEditAction } from '../../store/actions/getArticle.action';
import {
  articleEditSelector,
  ErrorsArticleEditSelector,
  isSubmittingArticleEditSelector,
} from '../../store/selectors';

@Component({
  selector: 'app-edit-article',
  templateUrl: './editArticle.component.html',
  styleUrls: ['./editArticle.component.scss'],
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<ArticleInputInterface>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;
  slug: string;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(
      select(isSubmittingArticleEditSelector)
    );
    this.backendErrors$ = this.store.pipe(select(ErrorsArticleEditSelector));
    this.initialValues$ = this.store.pipe(
      select(articleEditSelector),
      filter((article: ArticleInterface) => article !== null),
      map((article: ArticleInterface) => {
        return {
          title: article.title,
          description: article.description,
          body: article.body,
          tagList: article.tagList,
        };
      })
    );
  }

  fetchData(): void {
    this.store.dispatch(getArticleEditAction({ slug: this.slug }));
  }

  onSubmit(articleInput: ArticleInputInterface): void {
    this.store.dispatch(
      updateArticleEditAction({ articleInput, slug: this.slug })
    );
  }
}
