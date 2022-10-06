import {Injectable} from '@angular/core';
import {addDoc, collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Actor} from "../classes/actor";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private firestore: Firestore) {
  }

  agregarActor(actor: Actor) {
    const ref = collection(this.firestore, 'actores')
    return addDoc(ref, actor);
  }

  obtenerActores(): Observable<Actor[]> {
    const ref = collection(this.firestore, 'actores')
    return collectionData(ref) as Observable<Actor[]>;
  }
}
