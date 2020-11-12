import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.page.html',
  styleUrls: ['./home-child.page.scss'],
})
export class HomeChildPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirectLogIn() {
    this.router.navigate(['authContent/home']);
  }
}
