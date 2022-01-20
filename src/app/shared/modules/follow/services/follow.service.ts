import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetProfileResponseInterface } from 'src/app/shared/types/getProfileResponse.interface';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { environment } from 'src/environments/environment';

@Injectable()
export class FollowService {
  constructor(private http: HttpClient) {}

  follow(slug: string): Observable<ProfileInterface> {
    const url = this.getUrl(slug);
    return this.http.post(url, {}).pipe(map(this.getProfile));
  }

  unFollow(slug: string): Observable<ProfileInterface> {
    const url = this.getUrl(slug);
    return this.http.delete(url).pipe(map(this.getProfile));
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/profiles/${slug}/follow`;
  }

  getProfile(response: GetProfileResponseInterface): ProfileInterface {
    return response.profile;
  }
}
