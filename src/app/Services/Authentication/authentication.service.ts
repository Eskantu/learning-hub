import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { LocalStorageTool } from '@tools/LocalStorage';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  JWT: string;
  decodedToken: { [key: string]: string };
  constructor(private localStorage: LocalStorageTool) {
    this.JWT = this.localStorage.get('JWT') ?? '';
    // this.decodeToken = () => this.decodeToken() ?? {};
  }

  IsLoggedIn(): boolean {
    return this.JWT?true:false;
  }

  setFakeToken(token: string): void {
    this.localStorage.set('JWT', token);
    this.JWT = token;
  }
  getFakeToken(): string {
    return this.localStorage.get('JWT') ?? '';
  }

  // setToken(token: string): void {
  //   if (token) {
  //     this.JWT = token;
  //   }
  // }

  // decodeToken(): { [key: string]: string } {
  //   if (this.JWT) {
  //     this.decodedToken = jwt_decode.jwtDecode(this.JWT);
  //   }
  //   return this.decodedToken;
  // }

  // getDecodedToken() {
  //   return jwt_decode.jwtDecode(this.JWT);
  // }
}
