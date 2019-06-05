import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserhomeComponent } from './userhome/userhome.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
 
  {path: 'adminlogin', component: AdminloginComponent},
   {path: 'userlogin', component: UserloginComponent},
   {path: 'adminhome', component: AdminhomeComponent},
   {path: 'userhome', component: UserhomeComponent},
  {path: '**', component: PageNotFoundComponent}
 
 
   
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
