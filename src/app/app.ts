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
  inputNumber = signal<number | null>(null);

  onButtonClick() {
    const value = Math.floor(Math.random() * 100);
    this.randomNumber.set(value);
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value ? parseInt(input.value, 10) : null;
    this.inputNumber.set(value);
  }
}

