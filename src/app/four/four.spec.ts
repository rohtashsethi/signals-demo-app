import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Four } from './four';

describe('Four', () => {
  let component: Four;
  let fixture: ComponentFixture<Four>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Four]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Four);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
