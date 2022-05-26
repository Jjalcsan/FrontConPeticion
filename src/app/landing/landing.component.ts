import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigateByUrl("landing/login");
  }

  nagivateToRegister() {
    this.router.navigateByUrl("landing/register");
  }

}
