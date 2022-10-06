import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pelicula} from '../../../classes/pelicula';
import {PeliculaService} from "../../../services/pelicula.service";
import {Actor} from "../../../classes/actor";

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
    this.peliculaService.obtenerPeliculas().subscribe(peliculas => {
      peliculas.map((p: Pelicula) => {
        this.peliculas.push(new Pelicula(p.nombre, p.tipo, p.fechaEstreno, p.cantidadPublico, p.foto, p.actor))
      })
    })
  }

  notificarClickPelicula($event: Pelicula): void {
    this.detallePelicula.emit($event);
  }
}
