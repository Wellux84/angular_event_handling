import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-for-divide',
  imports: [],
  templateUrl: './for-divide.html',
  styleUrl: './for-divide.css',
})
export class ForDivide {
  @Input() fordivide: number | null = null;
  @Output() divideResult = new EventEmitter<number>();
  divider: number | null = null;

  divideByNumber() {
    if (this.fordivide !== null && this.divider !== null && this.divider !== 0) {
      const result = this.fordivide / this.divider;
      this.divideResult.emit(result);
    }
  }

  onInputDivider(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value ? parseInt(input.value, 10) : null;
    this.divider = value;
  }
}
