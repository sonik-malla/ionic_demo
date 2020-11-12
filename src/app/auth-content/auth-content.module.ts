import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthContentPageRoutingModule } from './auth-content-routing.module';

import { AuthContentPage } from './auth-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthContentPageRoutingModule
  ],
  declarations: [AuthContentPage]
})
export class AuthContentPageModule {}
