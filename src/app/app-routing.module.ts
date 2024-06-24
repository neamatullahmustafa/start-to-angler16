import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ApiDataComponent } from './api-data/api-data.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'home' },
    { path: 'apiData', component: ApiDataComponent, title: 'apiData' },
  { path: 'parent', component: ParentComponent, title: 'parent' },
  { path: 'child', component: ChildComponent, title: 'child' },
  {
    path: 'about',
    component: AboutComponent,
    title: 'about',
    children: [
      { path: 'mobile', component: MobileComponent, title: 'mobile' },
      { path: 'web', component: WebComponent, title: 'web' },
    ],
  },
  { path: 'footer', component: FooterComponent, title: 'footer' },
  { path: '**', component: NotfoundComponent, title: '404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
