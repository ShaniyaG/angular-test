import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  apiUrl = 'https://api.publicapis.org/entries';
  constructor(private http: HttpClient) {}
  getUserDetails() {
    return this.http.get(this.apiUrl);
  }
}
