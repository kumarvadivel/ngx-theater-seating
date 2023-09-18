import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheaterSeatingComponent } from './theater-seating.component';

describe('TheaterSeatingComponent', () => {
  let component: TheaterSeatingComponent;
  let fixture: ComponentFixture<TheaterSeatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheaterSeatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheaterSeatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
