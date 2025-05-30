import { ComponentFixture, TestBed } from '@angular/core/testing';

import { One } from './one';

describe('One', () => {
  let component: One;
  let fixture: ComponentFixture<One>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [One]
    })
    .compileComponents();

    fixture = TestBed.createComponent(One);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
