import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  goDashboard() {
    if (!this.username || !this.password) {
      alert('Please enter username and password');  
      return;
    }

    console.log('Username:', this.username);
    console.log('Password:', this.password);

    this.router.navigate(['/dashboard']);
  }

}
