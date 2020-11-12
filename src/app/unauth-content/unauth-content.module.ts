import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnauthContentPageRoutingModule } from './unauth-content-routing.module';

import { UnauthContentPage } from './unauth-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnauthContentPageRoutingModule
  ],
  declarations: [UnauthContentPage]
})
export class UnauthContentPageModule {}
