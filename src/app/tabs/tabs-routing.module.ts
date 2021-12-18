import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../pages/tabs/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/tabs/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'reels',
        loadChildren: () => import('../pages/tabs/reels/reels.module').then(m => m.ReelsPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/tabs/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: 'shop',
        loadChildren: () => import('../pages/tabs/shop/shop.module').then(m => m.ShopPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
