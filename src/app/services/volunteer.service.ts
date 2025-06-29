import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  private apiUrl = 'https://example.com/api/volunteer'; // Replace with real API

  constructor(private http: HttpClient) {}

  getOpportunities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
