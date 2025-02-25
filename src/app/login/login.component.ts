import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private router: Router) { }
  login() {
    console.log('this is the username',this.username);
    console.log('this is the password',this.password);
    
    
    if (this.username === 'dummyUser' && this.password === 'dummyPass') {
      // Navigate to the main dashboard with the sidebar
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }

  ngOnInit(): void {
  }

}
