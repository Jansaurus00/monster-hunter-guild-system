import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hunters } from './hunters';

describe('Hunters', () => {
  let component: Hunters;
  let fixture: ComponentFixture<Hunters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hunters],
    }).compileComponents();

    fixture = TestBed.createComponent(Hunters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
