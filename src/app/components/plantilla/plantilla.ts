import { Component, inject, OnInit, signal } from '@angular/core';
import { Plantillas } from '../../interfaces/plantilla';
import { plantillaService } from '../../services/plantilla.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-plantilla',
  imports: [],
  templateUrl: './plantilla.html',
  styleUrl: './plantilla.css',
})
export class Plantilla implements OnInit {
  private plantillaService = inject(plantillaService);
  plantilla = signal<Plantillas[]>([]);

  ngOnInit(): void {
    this.getPlantilla();
  }

  getPlantilla() {
    this.plantillaService
      .getdatos()
      .pipe(tap((respuesta) => this.plantilla.set(respuesta)))
      .subscribe();
  }
}
