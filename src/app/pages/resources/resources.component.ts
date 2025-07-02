import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FoodbankService } from '../../services/foodbank.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit {
  foodbanks: any[] = [];

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
