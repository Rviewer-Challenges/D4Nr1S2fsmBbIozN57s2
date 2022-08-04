import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SettingsComponent } from './pages/settings/settings.component';

import { SharedModule } from 'app/shared/shared.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule
  ]
})
export class SettingsModule { }
