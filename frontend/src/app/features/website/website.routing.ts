import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { WebsitesComponent } from "./pages/websites/websites.component";

const routes: Routes = [
  {
    path: '',
    component: WebsitesComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class WebsiteRoutingModule {}
