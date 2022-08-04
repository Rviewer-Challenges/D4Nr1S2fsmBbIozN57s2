import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IsAuthGuard } from "app/core/guards/is-auth.guard";

import { FeedComponent } from "./pages/feed/feed.component";
import { SavedComponent } from "./pages/saved/saved.component";

const routes: Routes = [
  {
    path: 'saved' ,
    canActivate: [IsAuthGuard],
    component: SavedComponent
  },
  {
    path: ':feedID',
    component: FeedComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
})
export class UsersRoutingModule {}
