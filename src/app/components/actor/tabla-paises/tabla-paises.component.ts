import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PaisService} from "../../../services/pais.service";
import {Pais} from "../../../classes/pais";
import {Pelicula} from "../../../classes/pelicula";

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent implements OnInit {
  isLoading = true;
  paises: Pais[] = []

  @Output() paisSeleccionado: EventEmitter<Pais> = new EventEmitter();

  constructor(private paisService: PaisService) {
    setTimeout(() => {
      paisService.getPaises().toPromise()
        .then((c: any) => {
          const map = new Map(Object.entries(c));
          map.forEach((value: any, key: any) => {
            if (this.filterPais(value["cca2"])) {
              this.paises.push(new Pais(value["translations"]["spa"]["official"], value["flags"]["svg"]))
            }
          });
          this.isLoading = false;
        });
    }, 1000);
  }

  ngOnInit(): void {
  }

  private filterPais(nombre: string) {
    return nombre === 'AR' || nombre === 'BR' || nombre === 'US'
  }

  seleccionarPais(pais: any) {
    this.paisSeleccionado.emit(pais);
  }
}
