// src/app/services/job.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'https://jsearch.p.rapidapi.com/search';

  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '6e9faf03f6msh4eb068268be04fbp1b9f25jsnbec54fa755ea', // Your actual key
    'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  /**
   * Fetch jobs based on query
   * @param query - the search keyword (e.g. developer, designer, etc.)
   */
  getJobs(query: string): Observable<any> {
    const url = `${this.apiUrl}?query=${query}&country=MY&page=1`;
    return this.http.get<any>(url, { headers: this.headers });
  }
}
