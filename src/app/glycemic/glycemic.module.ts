import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlycemicPageRoutingModule } from './glycemic-routing.module';

import { GlycemicPage } from './glycemic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlycemicPageRoutingModule
  ],
  declarations: [GlycemicPage]
})
export class GlycemicPageModule {}
