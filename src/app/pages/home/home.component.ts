import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule], // Import RouterModule for routing support
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  articles: any[] = [];

  constructor(private newsService: NewsService, private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit() {
    this.newsService.getNews().subscribe(data => {
      this.articles = data.articles;
    });
  }
}


