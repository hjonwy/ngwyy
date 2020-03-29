import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeResolveService } from 'src/app/services/home-resolve.service';


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'finding'}, resolve: {homeData: HomeResolveService} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
