import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public database: string = environment.database;
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  private extractData(res) {
    let body = res;
    return body || [] || {};
  }

  login(params: any): Observable<any> {
    let headers = this.headers;
    let body = JSON.stringify(params);
    return this._http
      .post(`${this.database}/auth/login`, body, { headers: headers })
      .pipe(map(this.extractData));
  }

  validToken(token: any): Observable<any> {
    let headers = this.headers.set('Authorization', token);

    return this._http
      .get(`${this.database}/auth/validate`, {
        headers: headers
      })
      .pipe(map(this.extractData));
  }

  authenticated(): boolean {
    let t = localStorage.getItem('token');
    return t != null || t != undefined;
  }
}
