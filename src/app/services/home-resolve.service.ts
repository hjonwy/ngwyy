import { Injectable } from '@angular/core';
import { ServicesModule } from './services.module';
import { Resolve } from '@angular/router';
import { Banner, HotTag, SongSheet, Singer } from './data-types/common.types';
import { Observable, forkJoin } from 'rxjs';
import { first } from 'rxjs/internal/operators';
import { HomeService } from './home.service';
import { SingerService } from './singer.service';

type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable({
  providedIn: ServicesModule
})
export class HomeResolveService implements Resolve<HomeDataType> {

  constructor(private homeServe: HomeService, private singerServe: SingerService) { }

  resolve(): Observable<HomeDataType> {
      return forkJoin([
        this.homeServe.getBanners(),
        this.homeServe.getHotTags(),
        this.homeServe.getPersonalSheetList(),
        this.singerServe.getEnterSinger()
      ]).pipe(first());
  }
}
