import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FoodbankService } from '../../services/foodbank.service';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [RouterModule, CommonModule, SafeUrlPipe],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit {
  foodbanks: any[] = [];

  mapSrc: string = 'https://www.openstreetmap.org/export/embed.html?bbox=100.0,1.0,104.0,6.5&layer=mapnik&marker=3.1390,101.6869';

  updateMap(lat: number, lon: number) {
  const delta = 0.01; // Zoom level adjustment
  const south = lat - delta;
  const north = lat + delta;
  const west = lon - delta;
  const east = lon + delta;

  this.mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${west},${south},${east},${north}&layer=mapnik&marker=${lat},${lon}`;
}

  constructor(
    private foodbankService: FoodbankService,
    private router: Router // ✅ Add Router here
  ) {}

  ngOnInit(): void {
    this.foodbankService.getFoodBanks().subscribe({
      next: (data) => {
        console.log('Fetched foodbank data:', data);
        this.foodbanks = data;
      },
      error: (err) => {
        console.error('Error fetching foodbanks:', err);
      }
    });
  }

  // ✅ Method to navigate to market
  navigateTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}
