import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RouterModule } from '@angular/router';

import { NewsContainerComponent } from './news-container/news-container.component';
import { ButtonTopComponent } from './button-top/button-top.component';
import { ToggleThemeComponent } from './toggle-theme/toggle-theme.component';
import { NewCardRecentComponent } from './new-card-recent/new-card-recent.component';
import { NoFeedsComponent } from './no-feeds/no-feeds.component';
import { SearchInputComponent } from './search-input/search-input.component';

@NgModule({
  declarations: [
    NewsContainerComponent,
    ButtonTopComponent,
    ToggleThemeComponent,
    NewCardRecentComponent,
    NoFeedsComponent,
    SearchInputComponent,
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterModule
  ],
  exports: [
    NewsContainerComponent,
    ButtonTopComponent,
    ToggleThemeComponent,
    NoFeedsComponent,
    SearchInputComponent
  ]
})
export class SharedModule { }
