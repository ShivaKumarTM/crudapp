import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from '../common/global-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomeLbls = GlobalConstants;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  details(value: any) {
    if (value === this.welcomeLbls?.category) {
      this.router.navigate(['/categories'])
    } else if (value === this.welcomeLbls?.product) {
      this.router.navigate(['/products'])
    }
  }
}
