import { PopularTagType } from 'src/app/shared/types/popularTag.type';

export interface TagsStateInterface {
  isLoading: boolean;
  error: null | string;
  data: null | PopularTagType[];
}
