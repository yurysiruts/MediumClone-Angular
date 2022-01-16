import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';
import { SaveArticelResponseInterface } from 'src/app/shared/types/saveArticleResponse.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class CreateArticleService {
  constructor(private http: HttpClient) {}

  createArticle(
    articleInput: ArticleInputInterface
  ): Observable<ArticleInterface> {
    const url = environment.apiUrl + '/articles';
    const sendArticleRequest = {
      article: articleInput,
    };

    return this.http
      .post<SaveArticelResponseInterface>(url, sendArticleRequest)
      .pipe(map((response: SaveArticelResponseInterface) => response.article));
  }
}
