import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pelicula} from '../../../classes/pelicula';
import {PeliculaService} from "../../../services/pelicula.service";

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.scss']
})
export class PeliculaListadoComponent implements OnInit {
  // @ts-ignore
  public peliculas: Array<Pelicula> = new Array<Pelicula>();
  @Output() detallePelicula: EventEmitter<Pelicula> = new EventEmitter();

  constructor(private peliculaService: PeliculaService) {
  }

  ngOnInit(): void {
    this.peliculas.push(new Pelicula('1', 'The Shawshank Redemption', 'Drama', '1999-08-01', 1999332, 'https://ringostrack.com/storage/covers/50339_the-shawshank-redemption.jpg'))
    // this.peliculaService.alta(new Pelicula('1', 'The Shawshank Redemption', 'Drama', '1999-08-01', 1999332, 'https://ringostrack.com/storage/covers/50339_the-shawshank-redemption.jpg'));
    // this.peliculaService.alta(new Pelicula('2', 'The Godfather', 'Drama', '1999-08-01', 1999332, 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg'));
    // this.peliculaService.getAll().then(x => console.log(x))
  }

  notificarClickPelicula($event: Pelicula): void {
    this.detallePelicula.emit($event);
  }
}
