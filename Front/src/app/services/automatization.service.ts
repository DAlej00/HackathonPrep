import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutomatizationService {
  public remote: string = environment.remote;
  public headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private _http: HttpClient) {}

  sendAction(control: string, action: string): Observable<any> {
    let headers = this.headers;
    return this._http.get(`${this.remote}/controls?${control}=${action}`, {
      headers: headers
    });
  }
}
