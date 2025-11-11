import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Persona } from '../interfaces/persona';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class personaService {
  private http = inject(HttpClient);
  private urlApi = environment.apirul;

  getPersonas(): Observable<Persona[]> {
    let solicitud = 'api/Personas';
    return this.http
      .get<Persona[]>(this.urlApi + solicitud)
      .pipe(tap((respuesta) => console.log(respuesta)));
  }
}
