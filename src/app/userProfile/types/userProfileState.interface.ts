import { ProfileInterface } from 'src/app/shared/types/profile.interface';

export interface UserProfileStateInterface {
  isLoading: boolean;
  error: string | null;
  data: ProfileInterface | null;
}
