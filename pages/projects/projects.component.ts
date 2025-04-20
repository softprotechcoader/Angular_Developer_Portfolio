import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
import AOS from 'aos';


@Component({
  selector: 'app-projects',
  imports: [FormsModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Revenue Forecast Portal – Cognizant',
      description: 'Angular 18 + ASP.NET Core Web API with monolithic architecture. Implemented JWT Auth, guards, Azure SQL, data filtration, and revenue forecasting.',
      icon: 'bi-bar-chart-fill',
      animation: 'fade-right'
    },
    {
      title: 'Your Shop – E-Commerce App',
      description: 'Basic shopping site with CRUD operations for products. Angular services, Bootstrap UI for smooth user experience.',
      icon: 'bi-shop',
      animation: 'fade-left'
    },
    {
      title: 'Seat Booking App',
      description: 'Restaurant booking app with features like seat locator, restaurant locator, menu viewing, and payment services.',
      icon: 'bi-calendar-check',
      animation: 'fade-right'
    },
    {
      title: 'Task Tracker – Web & Windows App',
      description: 'Task scheduling app with calendar integration, project duration tracking, and delay notifications. Converted into Windows app with ElectronBuilder.',
      icon: 'bi-list-check',
      animation: 'fade-left'
    }
  ];

  ngOnInit() {
    AOS.init({
      duration: 1000,  // Animation duration
      offset: 200,     // Scroll offset for triggering the animation
      once: true,      // Ensure animation runs once when it enters the viewport
    });
  }
}
