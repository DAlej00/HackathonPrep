import { Injectable, DoCheck } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class AutomatizationService {
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  sendAction(remote: string, action: string): Observable<any> {
    let headers = this.headers;
    return this._http.get(`${remote}/controls?action=${action}`, {
      headers: headers
    });
  }
}
