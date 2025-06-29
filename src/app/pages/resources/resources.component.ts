import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
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

  constructor(private foodbankService: FoodbankService) {}

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

}
