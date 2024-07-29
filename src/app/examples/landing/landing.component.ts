import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Centre } from 'app/models/Centre';
import { CentreService } from 'app/Service/centre.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  centres: Centre[] = [];
  selectedCentre: number | null = null;
  focus: any;
  focus1: any;

  constructor(private centreService: CentreService, private router: Router) { }

  ngOnInit() {
    this.loadCentres();
  }

  loadCentres(): void {
    this.centreService.getAllCentres().subscribe(
      (data: Centre[]) => this.centres = data,
      error => console.error('Error fetching centres', error)
    );

  }


  viewCentreDetails(): void {
    if (this.selectedCentre) {
      this.router.navigate(['/centre-details', this.selectedCentre]);
    } else {
      alert('Please select a centre first.');
    }
  }
}
