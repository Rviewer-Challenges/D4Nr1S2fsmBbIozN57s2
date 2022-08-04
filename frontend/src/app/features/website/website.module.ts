import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsitesComponent } from './pages/websites/websites.component';

import { SkeletonsModule } from 'app/shared/skeletons/skeletons.module';

@NgModule({
  declarations: [
    WebsitesComponent
  ],
  imports: [
    CommonModule,
    SkeletonsModule
  ]
})
export class WebsiteModule { }
