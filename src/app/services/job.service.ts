import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class JobService {
  private apiUrl = 'https://jsearch.p.rapidapi.com/search';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '6318bb7a1amsh50582fb90179f43p1b54d4jsn9b19a5b27ed9',
  });

  constructor(private http: HttpClient) {}

  getJobs(): Observable<any> {
  const params = {
    query: 'job',   // Generic query for broad results
    page: '1',
    num_pages: '1'  // Limit to 10 results
  };

  return this.http.get(this.apiUrl, { headers: this.headers, params });
}



}
