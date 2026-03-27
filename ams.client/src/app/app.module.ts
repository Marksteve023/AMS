import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateAttendanceComponent } from './pages/create-attendance/create-attendance.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [       
    DashboardComponent,
    ProfileComponent,
    LoginComponent,
    CreateAttendanceComponent,
    AttendanceComponent,
    RegisterComponent,
  ],
  imports: [
    AppComponent,  
    NavbarComponent,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
