import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BlogpostModule } from './blogpost/blogpost.module';

import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
 import { CmspageModule } from './cmspage/cmspage.module';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    HomeComponent,
   FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    AdminloginComponent,
    UserloginComponent,
    AdminhomeComponent,
    UserhomeComponent,
   
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
      BlogpostModule,
      CmspageModule,
    AppRoutingModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
