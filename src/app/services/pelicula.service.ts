import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  query,
  where
} from "@angular/fire/firestore";
import {Pelicula} from "../classes/pelicula";
import {Observable} from "rxjs";
import {Actor} from "../classes/actor";
import {deleteObject} from "@angular/fire/storage";

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private firestore: Firestore) {
  }

  agregarPelicula(pelicula: Pelicula) {
    const ref = collection(this.firestore, 'peliculas')
    return addDoc(ref, pelicula);
  }

  obtenerPeliculas(): Observable<Pelicula[]> {
    const ref = collection(this.firestore, 'peliculas')
    return collectionData(ref) as Observable<Pelicula[]>;
  }

  async eliminar(pelicula: Pelicula) {
    const ref = query(collection(this.firestore, "peliculas"), where("nombre", "==", pelicula.nombre));
    const querySnapshot = await getDocs(ref);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc.ref)
    });
  }
}
