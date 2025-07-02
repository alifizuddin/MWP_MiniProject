import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shelter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shelter.component.html',
  styleUrls: ['./shelter.component.css']
})
export class ShelterComponent {
  selectedState: string = '';

  states: string[] = ['Selangor', 'Johor', 'Kuala Lumpur', 'Sabah', 'Penang'];

  shelters = [
    {
      name: 'KL Homeless Shelter',
      state: 'Kuala Lumpur',
      address: 'Jalan Raja Laut, Kuala Lumpur',
      contact: '012-3456789'
    },
    {
      name: 'Johor Care Home',
      state: 'Johor',
      address: 'Jalan Tebrau, Johor Bahru',
      contact: '019-8882233'
    },
    {
      name: 'Penang Community Shelter',
      state: 'Penang',
      address: 'Lebuh Pantai, George Town',
      contact: '016-5544332'
    }
  ];

  get filteredShelters() {
    return this.shelters.filter(shelter => shelter.state === this.selectedState);
  }
}
