import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Observable } from 'rxjs';
import { Banner, HotTag, SongSheet } from './data-types/common.types';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/internal/operators';
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  getBanners(): Observable<Banner[]>{
    return this.http.get(this.uri + 'banner')
    .pipe(map((res: {banners: Banner[]}) => res.banners));
  }

  getHotTags() : Observable<HotTag[]>{
      return this.http.get(this.uri + 'playlist/hot')
      .pipe(map((res: {tags: HotTag[]})=> {
       return res.tags.sort( (x: HotTag, y: HotTag) => x.position - y.position).slice(0,5);
      }));
  }

  getPersonalSheetList() : Observable<SongSheet[]>{
    return this.http.get(this.uri + 'personalized')
    .pipe(map((res: {result: SongSheet[]})=> res.result.slice(0,16)));

  }
}
