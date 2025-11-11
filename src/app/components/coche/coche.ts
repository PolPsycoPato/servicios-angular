import { Component, inject, OnInit, signal } from '@angular/core';
import { tap } from 'rxjs';
import { cocheService } from '../../services/coche.service';
import { Coches } from '../../interfaces/coche';

@Component({
  selector: 'app-coche',
  imports: [],
  templateUrl: './coche.html',
  styleUrl: './coche.css',
})
export class Coche implements OnInit {
  private cocheService = inject(cocheService);

  coche = signal<Coches[]>([]); //Esto es el array que te coje todos los coches
  ngOnInit(): void {
    this.getCar();
  }

  getCar() {
    this.cocheService
      .getCoches()
      .pipe(tap((respuesta) => this.coche.set(respuesta)))
      .subscribe();
  }
}
