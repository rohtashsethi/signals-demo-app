import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-one',
  imports: [],
  templateUrl: './one.html',
  styleUrl: './one.css',
})
export class One {
  counter = signal<number>(1);

  constructor() {
    effect(() => {
      console.log(`Counter is: ${this.counter()}`)
    })
  }

  incrementUsingSet() {
    this.counter.set(this.counter() + 1);
  }

  incrementUsingUpdate() {
    this.counter.update(count => count + 1);
  }
}

