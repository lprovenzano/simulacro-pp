import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Pelicula} from "../../../classes/pelicula";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {

  @Input() peliculaSeleccionada: Pelicula | undefined;
  @Input() readOnly: boolean = true;

  constructor() {}

  ngOnInit(): void {
  }
}
