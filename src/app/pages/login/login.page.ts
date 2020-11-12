import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName: string;
  password: string

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('click login 01');
    if (this.userName === 'Ionic' && this.password ==='Test') {
      console.log('click login 02');
      this.router.navigate(['/authContent']);
    }

  }
  
  createAccount() {
    this.router.navigate(['/signup'])
  }
}
