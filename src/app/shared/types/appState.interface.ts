import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { AuthStateInterface } from 'src/app/auth/types/authState.interface';
import { CreateArticleStateInterface } from 'src/app/createArticle/store/types/createArticleState.interface';
import { EditArticleStateInterface } from 'src/app/editArticle/store/types/createArticleState.interface';
import { FeedStateInterface } from '../modules/feed/types/feedState.interface';
import { TagsStateInterface } from '../modules/popular-tags/store/types/tagsState.interface';

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagsStateInterface;
  article: ArticleStateInterface;
  createArticle: CreateArticleStateInterface;
  editArticle: EditArticleStateInterface;
}
