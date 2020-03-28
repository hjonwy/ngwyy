import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { Banner } from 'src/app/services/data-types/common.types';
import { NzCarouselComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  banners: Banner[];

  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent;

  constructor(private homeService: HomeService) {
    this.homeService.getBanners().subscribe(banners=>{
      this.banners = banners;
    });
  }

  ngOnInit() {
  }

  onBeforeChange({ to }) {
    console.log(to);
    this.carouselActiveIndex = to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }


}
