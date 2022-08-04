import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './pages/search/search.component';

import { SkeletonsModule } from 'app/shared/skeletons/skeletons.module';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SkeletonsModule,
    SharedModule
  ]
})
export class SearchModule { }
