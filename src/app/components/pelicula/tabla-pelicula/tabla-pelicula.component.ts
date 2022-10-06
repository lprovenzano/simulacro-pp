import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pelicula} from "../../../classes/pelicula";

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.scss']
})
export class TablaPeliculaComponent implements OnInit {
  @Input() peliculas: Array<Pelicula> = new Array<Pelicula>();
  @Output () detallePelicula: EventEmitter<Pelicula> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  detalle(pelicula: any) {
    this.detallePelicula.emit(pelicula);
  }

}
