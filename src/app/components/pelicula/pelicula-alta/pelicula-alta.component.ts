import {Component, OnInit} from '@angular/core';
import {Actor} from "../../../classes/actor";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActorService} from "../../../services/actor.service";
import {PeliculaService} from "../../../services/pelicula.service";
import {Pelicula} from "../../../classes/pelicula";

@Component({
  selector: 'app-pelicula-alta',
  templateUrl: './pelicula-alta.component.html',
  styleUrls: ['./pelicula-alta.component.scss']
})
export class PeliculaAltaComponent implements OnInit {
  peliculaForm: FormGroup;
  pelicula: any;
  actorProtagonista: string = '';
  sent: boolean = false;
  saved: boolean = false;

  constructor(private fb: FormBuilder, private peliculaService: PeliculaService) {
    this.peliculaForm = this.fb.group(
      {
        nombre: ['', Validators.required],
        tipo: ['', Validators.required],
        fechaEstreno: ['', Validators.required],
        cantidadPublico: ['', Validators.required],
        foto: ['', Validators.required],
      });
  }

  ngOnInit(): void {
  }

  actorSeleccionado($event: Actor) {
    this.actorProtagonista = $event.nombre + ' ' + $event.apellido;
  }

  guardarPelicula() {
    this.saved = true;
    this.pelicula = this.peliculaForm.value;
    this.pelicula.actor = this.actorProtagonista;
    if (this.actorProtagonista.length > 0) {
      this.peliculaService.agregarPelicula(this.pelicula);
    }
  }
}
