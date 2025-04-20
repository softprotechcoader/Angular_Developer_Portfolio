import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  imports: [FormsModule,CommonModule,BrowserModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'My personal portfolio built with Angular and hosted on GitHub Pages.',
      link: 'https://your-github-url.com'
    },
    {
      title: 'Task Manager App',
      description: 'A task management app with Angular and Firebase.',
      link: 'https://your-task-app-link.com'
    },
    {
      title: 'Weather Dashboard',
      description: 'Displays real-time weather using OpenWeather API and Angular.',
      link: 'https://your-weather-app-link.com'
    }
    // Add more projects as needed
  ];
}
