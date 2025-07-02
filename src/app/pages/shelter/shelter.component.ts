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

  states: string[] = ['Johor', 'Pulau Pinang','Selangor', 'Kuala Lumpur', ];

  shelters = [

    //Kuala Lumpur
    {
      name: 'KL Homeless Shelter',
      state: 'Kuala Lumpur',
      address: 'Jalan Raja Laut, Kuala Lumpur',
      contact: '012-3456789',
      link : 'https://www.facebook.com/PusatTransitGelandanganKL/'
    },
    {
      name: 'Yayasan Chow Kit',
      state: 'Kuala Lumpur',
      address: 'Jalan Belia, Kuala Lumpur',
      contact: '03-2602 0892',
      link : 'https://www.facebook.com/YayasanChowKit/'
    },
        {
      name: 'Kechara Soup Kitchen',
      state: 'Kuala Lumpur',
      address: 'Jalan Barat Off Jalan Imbi, Kuala Lumpur',
      contact: '03-2141 6046',
      link : 'https://kecharasoupkitchen.com/contact-us/'
    },
    
    //Selangor
    
    {
      name: 'Persatuan Rumah Caring Kajang',
      state: 'Selangor',
      address: 'Taman Cahaya, Kajang',
      contact: '012-3456789',
      link: 'https://www.facebook.com/PersatuanRumahCaringKajangSelangor/'
    },
    {
      name: 'Pusat Jagaan Baitul Amal',
      state: 'Selangor',
      address: 'Seksyen 14, Petaling Jaya',
      contact: '03-7960 9757',
      link: 'https://www.facebook.com/p/Pusat-jagaan-baitul-hidayah-100064928700521/'
    },
    {
      name: 'Pusat Jagaan Al-Fikrah',
      state: 'Selangor',
      address: 'Jalan Cheras, Kajang ',
      contact: '03-8733 0715',
      link: 'https://www.facebook.com/alfikrahmas/?locale=ms_MY'
    },

    //Johor
    {
      name: 'Johor Care Home',
      state: 'Johor',
      address: 'Jalan Tebrau, Johor Bahru',
      contact: '019-8882233',
      link: 'https://www.facebook.com/johorcarehome/'
    },

    {
      name: 'Pusat Kebajikan Kalvari Johor',
      state: 'Johor',
      address: 'Taman Sutera, Johor Bahru',
      contact: '019-8882233',
      link: 'https://pkk.com.my/'
    },
    {
      name: 'Pusat Jagaan Impian Syimah',
      state: 'Johor',
      address: 'Taman Sutera, Johor Bahru',
      contact: '013-750 7134',
      link: 'https://www.facebook.com/PusatJagaanImpianSyimah/'
    },

    //penang
    {
      name: 'Penang Community Shelter',
      state: 'Pulau Pinang',
      address: 'Lebuh Pantai, George Town',
      contact: '016-5544332',
      link: 'https://www.facebook.com/PenangCommunityShelter/'
    },
    {
      name: 'Rumah Kebajikan Seri Cahaya',
      state: 'Pulau Pinang',
      address: 'Bayan Lepas, Pulau Pinang',
      contact: ' 04-626 5101',
      link: 'https://rumahkebajikansericahaya.com/'
    },

    {
      name: 'Pusat Jagaan St.Joseph',
      state: 'Pulau Pinang',
      address: 'Georgetown, Pulau Pinang',
      contact: '04-263 5419',
      link: 'https://www.stjosephpg.com/'
    },

  ];

  get filteredShelters() {
    return this.shelters.filter(shelter => shelter.state === this.selectedState);
  }
}
