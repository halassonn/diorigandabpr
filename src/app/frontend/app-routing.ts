import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontendComponent } from './frontend.component';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { NotfoundComponent } from '../notfound/notfound.component';



const appRoutes: Routes = [


  {path : '',component:FrontendComponent,
  children :[
    {
      path:'',component:HomeComponent
    },
    {
      path:'about',component:AboutComponent
    },
   
  ]
  },
] 


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);