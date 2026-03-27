import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent} from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CreateAttendanceComponent } from './pages/create-attendance/create-attendance.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},


  // Main pages

  { path: 'dashboard', component: DashboardComponent },
  { path: 'create-attendance', component: CreateAttendanceComponent },
  { path: 'attendance', component: AttendanceComponent },


  // Redirects
  { path: 'logout', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // ✅ Handle un  known routes (VERY IMPORTANT)
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
