import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService } from '../../services/job.service';


interface Job {
  title: string;
  description: string;
  location: string;
  url: string;
  [key: string]: any; // ← in case there are other unknown props
}

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  jobs: any[] = [];

  constructor(
    private jobService: JobService,

  ) {}

  loading = true;

ngOnInit(): void {
  this.jobService.getJobs().subscribe({
    next: (res) => {
      this.jobs = res.data || [];
      this.loading = false;
    },
    error: (err) => {
      console.error('Job API error:', err);
      this.loading = false;
    }
  });
}


}
