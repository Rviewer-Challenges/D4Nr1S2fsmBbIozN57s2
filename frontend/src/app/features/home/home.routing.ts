import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IsAuthGuard } from "@guards/is-auth.guard";
import { HomeComponent } from "./home.component";
import { ExploreComponent } from "./pages/explore/explore.component";

const childRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'explore',
    canActivate: [IsAuthGuard],
    component: ExploreComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomeRoutingModule {}
