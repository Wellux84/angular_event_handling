import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForDivide } from './for-divide/for-divide';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ForDivide],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = signal('Click Button For Random Number!');
  randomNumber = signal<number | null>(null);
  inputNumber = signal<number | null>(null);
  forDivideResult: number | null = null;
  forDivideNumber = signal<number | null>(null);

  onButtonClick() {
    const value = Math.floor(Math.random() * 100);
    this.randomNumber.set(value);
    this.forDivide();
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value ? parseInt(input.value, 10) : null;
    this.inputNumber.set(value);
    this.forDivideResult = null;
  }

  forDivide() {
    const random = this.randomNumber();
    const input = this.inputNumber();
    
    if (random !== null && input !== null) {
      const result = random + input;
      this.forDivideNumber.set(result);
    }
  }

  onForDivideResponse(value: number) {
    this.forDivideResult = value;
  }
}

