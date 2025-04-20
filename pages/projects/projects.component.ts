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
      title: 'Revenue Forecast Portal',
      icon: 'bi-bar-chart-fill',
      shortDesc: 'Angular 18 frontend & ASP.NET Core Web API backend. JWT authentication & revenue forecasting.',
      fullDesc: `The portal uses Angular for frontend and ASP.NET Core Web API for the backend. The project implements JWT authentication & authorization. The forecasting uses probability and statistics to predict upcoming revenue, based on previous data. Data filtering was implemented to filter by project and year, and Azure SQL Server was used for data storage. The application follows a monolithic approach for API creation. CI/CD configured with Azure DevOps, hosted on Azure App Services.`,
      github: 'https://github.com/yourusername/revenue-forecast'
    },
    {
      title: 'Your Shop',
      icon: 'bi-shop',
      shortDesc: 'Basic e-commerce site with CRUD operations and product management.',
      fullDesc: `A simple e-commerce website that allows users to perform CRUD operations on products. Includes features such as adding, editing, and deleting items. The site is built with Angular and is responsive and user-friendly.`,
      github: 'https://github.com/softprotechcoader/YourShop'
    },
    {
      title: 'Seat Booking App',
      icon: 'bi-calendar-check',
      shortDesc: 'Seat and restaurant locator, menu viewing, and booking services for restaurants.',
      fullDesc: `Created a dining seat booking app that includes user registration, restaurant locator, seat locator, menu viewing, and secure payment. Enhances dining out experience through seamless reservation and service management.`,
      github: 'https://github.com/yourusername/seat-booking'
    },
    {
      title: 'Task Tracker',
      icon: 'bi-list-check',
      shortDesc: 'Task scheduling, project tracking, and delay notifications.',
      fullDesc: `Built with Express.js and React. Offers task assignment, calendar scheduling, delay notifications, and Excel export. Also converted into a Windows desktop app using Electron, storing data in a JSON file for offline use.`,
      github: 'https://github.com/softprotechcoader/TaskTracker-2.0'
    },
    {
      title: 'Portfolio Website',
      icon: 'bi-window',
      shortDesc: 'This portfolio website showcasing all projects and personal journey.',
      fullDesc: `Built using Angular and Bootstrap, this portfolio showcases my projects, skills, and personal journey. Fully responsive and deployed on GitHub Pages.`,
      github: 'https://github.com/softprotechcoader/Angular_Developer_Portfolio'
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
