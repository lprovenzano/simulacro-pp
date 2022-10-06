import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import {BienvenidoComponent} from "./components/bienvenido/bienvenido.component";
import {BusquedaComponent} from "./components/busqueda/busqueda.component";
import {ActorListadoComponent} from "./components/actor/actor-listado/actor-listado.component";
import {PeliculaAltaComponent} from "./components/pelicula/pelicula-alta/pelicula-alta.component";
import {ActorAltaComponent} from "./components/actor/actor-alta/actor-alta.component";
import {PeliculaListadoComponent} from "./components/pelicula/pelicula-listado/pelicula-listado.component";
import {TablaPeliculaComponent} from "./components/pelicula/tabla-pelicula/tabla-pelicula.component";
import {DetallePeliculaComponent} from "./components/pelicula/detalle-pelicula/detalle-pelicula.component";
import {PeliculaService} from "./services/pelicula.service";
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TablaPaisesComponent } from './components/actor/tabla-paises/tabla-paises.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedaComponent,
    PeliculaAltaComponent,
    ActorAltaComponent,
    ActorListadoComponent,
    PeliculaListadoComponent,
    TablaPeliculaComponent,
    DetallePeliculaComponent,
    NavbarComponent,
    TablaPaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
