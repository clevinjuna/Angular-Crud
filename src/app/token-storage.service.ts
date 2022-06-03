import { Injectable } from '@angular/core';
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  static getToken() {
    throw new Error('Method not implemented.');
  }
  constructor() { }
  signOut(): void {
    window.sessionStorage.clear();
  }
  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken() {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  // public getUser() {
  //   return JSON.parse(sessionStorage.getItem(USER_KEY));
  // }
}