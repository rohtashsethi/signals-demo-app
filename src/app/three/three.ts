import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-three',
  imports: [],
  templateUrl: './three.html',
  styleUrl: './three.css',
})
export class Three {
  count = signal<number>(1);

  double = computed(() => this.count() * 2);
  sum = computed(() => this.count() + this.double());

  constructor() {
    effect(() => {
      console.log(`Sum is: ${this.sum()}`);
    });
  }

  ngOnInit(): void {
    // Uncomment to demonstrate Glitch Free Effect

    // this.count.set(2);
    // this.count.set(3);
    // this.count.set(4);
  }

  increment(): void {
    this.count.update((val) => val + 1);
  }

  reset(): void {
    this.count.set(1);
  }
}
