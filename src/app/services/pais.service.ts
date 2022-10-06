import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  endpoint = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) {
  }

  getPaises(): Observable<object[]> {
    return this.http
      .get<object[]>(this.endpoint);
  }
}
