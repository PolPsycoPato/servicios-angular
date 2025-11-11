import { HttpClient } from '@angular/common/http';
import { Coches } from '../interfaces/coche';
import { inject, Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class cocheService {
  private http = inject(HttpClient);
  private urlApiCoche = environment.urlcoches;

  getCoches(): Observable<Coches[]> {
    let solicitud = '/webresources/coches';
    return this.http
      .get<Coches[]>(this.urlApiCoche + solicitud)
      .pipe(tap((respuesta) => console.log(respuesta)));
  }
}
