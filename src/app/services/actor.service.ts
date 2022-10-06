import { Injectable } from '@angular/core';
import {addDoc, collection, Firestore} from "@angular/fire/firestore";
import {Pelicula} from "../classes/pelicula";
import {Actor} from "../classes/actor";

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private firestore : Firestore) {
  }

  agregarActor(actor: Actor){
    const ref = collection(this.firestore, 'actores')
    return addDoc(ref, actor);
  }
}
