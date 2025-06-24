import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiKey = '4908cca4715317b604ec45141a135a3b';  // replace with your GNews API key
  private apiUrl = `https://gnews.io/api/v4/search?q=poverty&lang=en&country=us&max=10&token=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
