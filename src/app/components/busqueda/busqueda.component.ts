import {Component, OnInit} from '@angular/core';
import {Pelicula} from "../../classes/pelicula";
import {PeliculaService} from "../../services/pelicula.service";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor(private peliculaService: PeliculaService) {
  }

  public unaPelicula: Pelicula | undefined;

  ngOnInit(): void {
  }

  peliculaSeleccionada($event: any) {
    this.unaPelicula = $event;
  }

  eliminar(unaPelicula: Pelicula) {
    if (unaPelicula) {
      this.peliculaService.eliminar(unaPelicula);
    }
  }

  modificar(unaPelicula: Pelicula) {
    if (unaPelicula) {
      console.log("Pelicula para modificar: ", unaPelicula)
    }
  }
}
