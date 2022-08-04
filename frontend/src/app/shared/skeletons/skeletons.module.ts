import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardNewComponent } from './card-new/card-new.component';
import { CardWebsitesAComponent } from './card-websites-a/card-websites-a.component';

@NgModule({
  declarations: [
    CardNewComponent,
    CardWebsitesAComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardNewComponent,
    CardWebsitesAComponent
  ]
})
export class SkeletonsModule { }
