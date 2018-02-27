import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

import { RouteguardGuard } from '../routeguard.guard';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { CategoriComponent } from './page/categori/categori.component';
import { AdminloginComponent } from './page/adminlogin/adminlogin.component';
import { NotfoundComponent } from '../notfound/notfound.component';


const aboutRoutes: Routes = [
  {
    path: 'administrator',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,canActivate:[RouteguardGuard],
        children:[
          {
            path:'categori',component:CategoriComponent
          }
          
        ]
      },
      {
        path:'login',component : AdminloginComponent
      },
    
     
    ]
  },
  { path: '**',  component: NotfoundComponent },
];

export const layoutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);