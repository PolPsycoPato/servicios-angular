import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { inject } from '@angular/core/primitives/di';
import { environment } from '../environments/environment';
import { Observable, tap } from 'rxjs';
import { Plantillas } from '../interfaces/plantilla';

@Injectable({ providedIn: 'root' })
export class plantillaService {
  private http = inject(HttpClient);
  private urlApiPlantilla = environment.urlPlantilla;

  getdatos(): Observable<Plantillas[]> {
    let solicitud = '/api/Plantilla';
    return this.http
      .get<Plantillas[]>(this.urlApiPlantilla + solicitud)
      .pipe(tap((respuesta) => console.log(respuesta)));
  }

}
