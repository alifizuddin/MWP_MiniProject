import { Routes } from '@angular/router';
import { JobsComponent } from './pages/jobs/jobs.component';
import { ShelterComponent } from './pages/shelter/shelter.component';
import { LayoutComponent } from './layout/layout.component';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'resources', loadComponent: () => import('./pages/resources/resources.component').then(m => m.ResourcesComponent) },
  { path: 'market', loadComponent: () => import('./pages/market/market.component').then(m => m.MarketComponent) },
  
  { path: 'help', loadComponent: () => import('./pages/help/help.component').then(m => m.HelpComponent) },
  { path: 'volunteer', loadComponent: () => import('./pages/volunteer/volunteer.component').then(m => m.VolunteerComponent) },
  { path: 'jobs', loadComponent: () => import('./pages/jobs/jobs.component').then(m => m.JobsComponent) },
  { path: 'shelter', loadComponent: () => import('./pages/shelter/shelter.component').then(m => m.ShelterComponent) },

];

