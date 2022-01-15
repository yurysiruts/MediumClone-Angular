import { ArticleInterface } from 'src/app/shared/types/article.interface';

export interface GetFeedResponseInterface {
  articales: ArticleInterface[];
  articlesCount: number;
}
