import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone:false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  fullname = '';
  username = '';
  password = '';

  constructor(private auth: AuthService) {}

  register() {
    const data = {
      fullname: this.fullname,
      username: this.username,
      password: this.password
    };

    this.auth.register(data).subscribe({
      next: (res: any) => alert(res.message),
      error: (err: any) => {
        alert('Registration failed');
        console.log(err);
      }
    });
  }
}
