import { Routes } from '@angular/router';
import { PublicNavComponent } from './+pages/+public/public-nav/public-nav.component';
import { AdminsNavComponent } from './+pages/+admins/admins-nav/admins-nav.component';
import { LibrariansNavComponent } from './+pages/+librarians/librarians-nav/librarians-nav.component';

export const routes: Routes = [
  {path:'public',component:PublicNavComponent},
  {path:'admins',component:AdminsNavComponent},
  {path:'librarians',component:LibrariansNavComponent},
  {path:'',redirectTo:'/public',pathMatch:'full'},
  {path:'**',redirectTo:'/public'}
];
