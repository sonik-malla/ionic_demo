import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeChildPageRoutingModule } from './home-child-routing.module';

import { HomeChildPage } from './home-child.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeChildPageRoutingModule
  ],
  declarations: [HomeChildPage]
})
export class HomeChildPageModule {}
