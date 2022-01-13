import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PopularTagsResponseInterface } from 'src/app/shared/modules/popular-tags/store/types/popularTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { environment } from 'src/environments/environment';

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  getTags(): Observable<PopularTagType[]> {
    const fullUrl = environment.apiUrl + '/tags';

    return this.http.get(fullUrl).pipe(
      map((response: PopularTagsResponseInterface) => {
        return response.tags;
      })
    );
  }
}
