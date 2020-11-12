import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeChildPage } from './home-child.page';

const routes: Routes = [
  {
    path: '',
    component: HomeChildPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeChildPageRoutingModule {}
