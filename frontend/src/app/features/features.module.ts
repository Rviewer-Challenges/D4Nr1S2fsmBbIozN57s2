import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '@components/components.module';

import { FeedModule } from './feed/feed.module';
import { WebsiteModule } from './website/website.module';
import { AuthModule } from 'app/auth/auth.module';
import { SharedModule } from 'app/shared/shared.module';
import { HomeModule } from './home/home.module';
import { SearchModule } from './search/search.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
    FeaturesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    FeedModule,
    WebsiteModule,
    AuthModule,
    HomeModule,
    SharedModule,
    SettingsModule,
    SearchModule
  ]
})
export class FeaturesModule { }
