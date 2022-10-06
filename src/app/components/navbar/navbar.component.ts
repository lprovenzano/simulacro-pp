import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  redirectActor(module: string) {
    let path = '/actor';
    if (module === 'alta') {
      path += '/alta'
    }else{
      path += '/listado'
    }
    this.router.navigate([path]);
  }

  redirectPelicula(module: string) {
    let path = '/peliculas';
    if (module === 'alta') {
      path += '/alta'
    }
    this.router.navigate([path]);
  }

}
