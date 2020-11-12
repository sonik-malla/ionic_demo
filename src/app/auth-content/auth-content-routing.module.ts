import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthContentPage } from './auth-content.page';

const routes: Routes = [
  {
    path: 'authContent',
    component: AuthContentPage,
    children: [
      {
        path: '',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'messages',
        loadChildren: () => import('../pages/messages/messages.module').then(m => m.MessagesPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: 'home-child',
        loadChildren: () => import('../pages/home-child/home-child.module').then( m => m.HomeChildPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthContentPageRoutingModule {}
