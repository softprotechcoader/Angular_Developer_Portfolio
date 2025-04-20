import { Component } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    alert('Thank you for reaching out!');

    // Reset form
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
