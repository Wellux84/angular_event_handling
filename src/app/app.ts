import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('Click Button For Random Number!');
  randomNumber = signal<number | null>(null);

  onButtonClick() {
    const value = Math.floor(Math.random() * 100);
    this.randomNumber.set(value);
  }
}

