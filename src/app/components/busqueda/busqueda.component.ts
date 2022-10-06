import {Component, OnInit} from '@angular/core';
import {Pelicula} from "../../classes/pelicula";

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor() {
  }

  public unaPelicula: Pelicula | undefined;

  ngOnInit(): void {
  }

  peliculaSeleccionada($event: any) {
    this.unaPelicula = $event;
  }

  eliminar(unaPelicula: Pelicula) {
    if(unaPelicula){
      console.log("Pelicula para eliminar: ", unaPelicula)
    }
  }
}
