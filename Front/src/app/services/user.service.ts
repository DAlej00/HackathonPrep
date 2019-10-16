import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
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
}
