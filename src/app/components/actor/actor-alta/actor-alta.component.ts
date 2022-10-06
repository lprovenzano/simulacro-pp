import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Pais} from "../../../classes/pais";
import {ActorService} from "../../../services/actor.service";

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.scss']
})
export class ActorAltaComponent implements OnInit {

  actor: FormGroup;
  actorData: any;
  saved: boolean = false;
  sent: boolean = false;
  paisOrigen: string = ''

  constructor(private fb: FormBuilder, private actorService: ActorService) {
    this.actor = this.fb.group(
      {
        nombre: ['', Validators.required],
        apellido: ['', Validators.required]
      });
  }

  ngOnInit(): void {
  }

  guardarActor() {
    this.sent = true;
    this.actorData = this.actor.value;
    this.actorData.pais = this.paisOrigen;
    if (this.paisOrigen.length > 0) {
      this.actorService.agregarActor(this.actorData);
      this.saved = true
    }
  }

  paisSeleccionado($event: Pais) {
    this.paisOrigen = $event.nombre;
  }
}
