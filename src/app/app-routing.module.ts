import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BienvenidoComponent} from "./components/bienvenido/bienvenido.component";
import {BusquedaComponent} from "./components/busqueda/busqueda.component";
import {PeliculaAltaComponent} from "./components/pelicula/pelicula-alta/pelicula-alta.component";
import {ActorListadoComponent} from "./components/actor/actor-listado/actor-listado.component";
import {PeliculaListadoComponent} from "./components/pelicula/pelicula-listado/pelicula-listado.component";
import {ActorAltaComponent} from "./components/actor/actor-alta/actor-alta.component";

const routes: Routes = [
  { path: '', component: BienvenidoComponent },
  { path: 'busqueda', component: BusquedaComponent },
  { path: 'peliculas/alta', component: PeliculaAltaComponent },
  { path: 'actor/alta', component: ActorAltaComponent },
  { path: 'actor/listado', component: ActorListadoComponent },
  { path: 'peliculas/listado', component: PeliculaListadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
