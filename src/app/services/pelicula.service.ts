import {Injectable} from '@angular/core';
import {addDoc, collection, Firestore} from "@angular/fire/firestore";
import {Pelicula} from "../classes/pelicula";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private firestore : Firestore) {
  }

  agregarPelicula(pelicula: Pelicula){
    const ref = collection(this.firestore, 'peliculas')
    return addDoc(ref, pelicula);
  }
}
