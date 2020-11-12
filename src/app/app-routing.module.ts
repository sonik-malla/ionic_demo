import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./unauth-content/unauth-content.module').then( m => m.UnauthContentPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./auth-content/auth-content.module').then( m => m.AuthContentPageModule)
  },
  // {
  //   path: 'home-child',
  //   loadChildren: () => import('./pages/home-child/home-child.module').then( m => m.HomeChildPageModule)
  // },
  // {
  //   path: 'auth-content',
  //   loadChildren: () => import('./auth-content/auth-content.module').then( m => m.AuthContentPageModule)
  // },
  // {
  //   path: 'unauth-content',
  //   loadChildren: () => import('./unauth-content/unauth-content.module').then( m => m.UnauthContentPageModule)
  // }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
