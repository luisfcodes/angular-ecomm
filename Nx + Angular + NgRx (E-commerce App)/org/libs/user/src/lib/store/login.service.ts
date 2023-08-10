import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;

  constructor(private readonly http: HttpClient) { }

  login(username: string, password: string){
    return this.http.post<string>('https://fakestoreapi.com/auth/login', {username, password});
  }
}
