import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://localhost:7170/api/User'; 

  constructor(private http: HttpClient) {}

  // ✅ REGISTER
  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // ✅ LOGIN (you’ll use this next)
  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
