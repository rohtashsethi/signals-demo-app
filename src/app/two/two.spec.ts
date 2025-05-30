import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Two } from './two';

describe('Two', () => {
  let component: Two;
  let fixture: ComponentFixture<Two>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Two]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Two);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
