import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Actor} from "../../../classes/actor";
import {ActorService} from "../../../services/actor.service";

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.scss']
})
export class ActorListadoComponent implements OnInit {

  @Output() actorSeleccionado: EventEmitter<Actor> = new EventEmitter();

  public isLoading: boolean = true;
  public actores: Actor[] = [];

  constructor(private actorService: ActorService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.actorService.obtenerActores().subscribe(actores => {
        actores.map((a: Actor) => {
          this.actores.push(new Actor(a.nombre, a.apellido, a.pais))
        })
      })
      this.isLoading = false;
    }, 1000);
  }

  seleccionarActor(actor: Actor) {
    this.actorSeleccionado.emit(actor);
  }
}
