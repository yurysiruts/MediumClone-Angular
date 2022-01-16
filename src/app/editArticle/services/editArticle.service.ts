import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { SaveArticelResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class EditArticleService {
  constructor(private http: HttpClient) {}

  updateArticle(
    articleInput: ArticleInputInterface,
    slug: string
  ): Observable<ArticleInterface> {
    const url = `${environment.apiUrl}/articles/${slug}`;
    const sendArticleRequest = {
      article: articleInput,
    };

    return this.http
      .put<SaveArticelResponseInterface>(url, sendArticleRequest)
      .pipe(map((response: SaveArticelResponseInterface) => response.article));
  }
}
