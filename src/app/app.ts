import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

function clickRandom() {
  return Math.floor(Math.random()*100);
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Click Button For Random Number!');
  protected readonly clickRandom = clickRandom;
}
