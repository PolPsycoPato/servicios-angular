import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonasApi } from './components/personas-api/personas-api';
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonasApi, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('servicios-angular');
}
