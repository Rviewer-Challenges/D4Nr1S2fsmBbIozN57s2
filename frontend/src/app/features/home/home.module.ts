import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';

import { ComponentsModule } from './components/components.module';
import { SharedModule } from 'app/shared/shared.module';
import { ExploreComponent } from './pages/explore/explore.component';
import { SkeletonsModule } from 'app/shared/skeletons/skeletons.module';

@NgModule({
  declarations: [
    HomeComponent,
    ExploreComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    SharedModule,
    SkeletonsModule
  ]
})
export class HomeModule { }
