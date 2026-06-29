import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Hunter {
  private apiUrl = 'http://localhost:3000/api/hunters';

  constructor(private http: HttpClient) {}

  getHunters(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addHunters(hunter: any): Observable<any> {
    return this.http.post(this.apiUrl, hunter);
  }

  updateHunters(id: string, hunter: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, hunter);
  }

  deleteHunters(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
