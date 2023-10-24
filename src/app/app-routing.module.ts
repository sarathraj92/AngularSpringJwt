import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminDashboardComponent } from './pages/AdminDashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './pages/UserDashboard/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent,pathMatch:'full'
  },
  {
    path:'register',component:RegisterComponent,pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent,pathMatch:'full'
  },
  {
    path:'adminDashboard',component:AdminDashboardComponent,pathMatch:'full'
  },
  {
    path:'userDashboard',component:UserDashboardComponent,pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
