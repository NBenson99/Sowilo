import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HypertensionmenuPageRoutingModule } from './hypertensionmenu-routing.module';

import { HypertensionmenuPage } from './hypertensionmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HypertensionmenuPageRoutingModule
  ],
  declarations: [HypertensionmenuPage]
})
export class HypertensionmenuPageModule {}
