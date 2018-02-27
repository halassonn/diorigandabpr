import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';

//firebase config
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AuthService } from './services/auth.service';

import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouteguardGuard } from './routeguard.guard';

import { MaterialModule } from './module/material.module';

import { LayoutModule } from '@angular/cdk/layout';

import { layoutRouting } from './backend/layout.routing';
import { LayoutComponent } from './backend/layout.component';
import { FrontendComponent } from './frontend/frontend.component';
import { HomeComponent } from './frontend/page/home/home.component';
import { AboutComponent } from './frontend/page/about/about.component';
import { DashboardComponent } from './backend/page/dashboard/dashboard.component';
import { AdminloginComponent } from './backend/page/adminlogin/adminlogin.component';
import { CategoriComponent } from './backend/page/categori/categori.component';
import { appRouting } from './frontend/app-routing';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './backend/page/login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LayoutComponent,
    DashboardComponent,
    AdminloginComponent,
    CategoriComponent,
    AboutComponent,
    FrontendComponent,
    NotfoundComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    appRouting,
    layoutRouting,
    MaterialModule,
  
  ],
  providers: [AuthService,RouteguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
