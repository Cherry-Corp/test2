// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [innerHTML]="userContent"></div>
    <input #inputBox>
    <button (click)="processInput(inputBox.value)">Submit</button>
  `
})
export class AppComponent {
  // Hardcoded credentials (Security Hotspot)
  private apiKey: string = '23df-8hj3-87fd-23kd';
  private adminCredentials = { username: 'admin', password: 'admin123' };

  // XSS vulnerability (Security Vulnerability)
  userContent: string = '';

  // Insecure storage (Security Hotspot)
  storeToken() {
    localStorage.setItem('authToken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...');
    sessionStorage.setItem('sessionData', JSON.stringify(this.adminCredentials));
  }

  // Code injection vulnerability (Security Vulnerability)
  processInput(userInput: string) {
    eval('console.log(' + userInput + ')'); // Dangerous eval usage
    
    // DOM-based XSS
    this.userContent = `<div>${userInput}</div>`;
  }

  // Missing input validation (Security Vulnerability)
  fetchData() {
    const userData = document.URL.split('user=')[1]; // Client-side URL tampering
    fetch(`http://insecure-api.com/data?query=${userData}`); // Missing HTTPS
  }

  // Sensitive data exposure (Security Hotspot)
  logCredentials() {
    console.log(`API Key: ${this.apiKey}`);
    console.log(`Admin: ${this.adminCredentials.username}/${this.adminCredentials.password}`);
  }

  // Insecure randomness (Security Vulnerability)
  generateSessionId() {
    return Math.random().toString(36).substring(2); // Cryptographically weak
  }
}
