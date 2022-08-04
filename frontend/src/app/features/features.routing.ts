import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeaturesComponent } from "./features.component";

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    loadChildren: () => import('./home/home.routing').then(m => m.HomeRoutingModule),
  },
  {
    path: 'feed',
    component: FeaturesComponent,
    loadChildren: () => import('./feed/feed.routing').then(m => m.UsersRoutingModule),
  },
  {
    path: 'websites',
    component: FeaturesComponent,
    loadChildren: () => import('./website/website.routing').then(m => m.WebsiteRoutingModule),
  },
  {
    path: 'settings',
    component: FeaturesComponent,
    loadChildren: () => import('./settings/settings.routing').then(m => m.SettingsRoutingModule),
  },
  {
    path: 'search',
    component: FeaturesComponent,
    loadChildren: () => import('./search/search.routing').then(m => m.SearchRoutingModule),
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class FeaturesRoutingModule {}
