import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Navigate(path) {
    switch (path) {
      case 'home':
        this.router.navigateByUrl('/');
        break;
      case 'home':
        this.router.navigateByUrl('/');
        break;
    }
  }
}
