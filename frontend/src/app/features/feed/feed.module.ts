import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlPipe } from 'app/core/pipes/html.pipe';

import { SkeletonsModule } from 'app/shared/skeletons/skeletons.module';
import { SharedModule } from 'app/shared/shared.module';

import { SavedComponent } from './pages/saved/saved.component';
import { FeedComponent } from './pages/feed/feed.component';


@NgModule({
  declarations: [
    FeedComponent,
    SavedComponent,
    HtmlPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    SkeletonsModule
  ]
})
export class FeedModule { }
