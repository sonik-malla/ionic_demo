import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  redirectLogIn() {
    this.router.navigate(['/login']);
  }
}
