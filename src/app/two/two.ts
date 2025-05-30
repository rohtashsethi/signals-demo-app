import { Component, computed, effect, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-two',
  imports: [],
  templateUrl: './two.html',
  styleUrl: './two.css',
})
export class Two {
  counter = signal(1);

  double: Signal<number> | null = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(`Counter is ${this.counter()}`);
      if (this.double) {
        console.log(`Double is ${this.double()}`);
      } else {
        console.log(`Double is ${this.double}`);
      }
    })
  }

  increment(): void {
    this.counter.update(count => count + 1);
  }

  destroyDouble(): void {
    this.double = null;
  }
}
