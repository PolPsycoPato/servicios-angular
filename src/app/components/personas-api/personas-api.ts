import { Component, inject, OnInit, signal } from '@angular/core';
import { personaService } from '../../services/persona.service';
import { Persona } from '../../interfaces/persona';
import { tap } from 'rxjs';

@Component({
  selector: 'app-personas-api',
  imports: [],
  templateUrl: './personas-api.html',
  styleUrl: './personas-api.css',
})
export class PersonasApi implements OnInit {
  private personaService = inject(personaService);
  persona = signal<Persona[]>([]);
  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.personaService
      .getPersonas()
      .pipe(tap((respuesta) => this.persona.set(respuesta)))
      .subscribe();
  }
}
