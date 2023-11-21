import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjektComponent } from './porjekt.component';

describe('PorjektComponent', () => {
  let component: PorjektComponent;
  let fixture: ComponentFixture<PorjektComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PorjektComponent]
    });
    fixture = TestBed.createComponent(PorjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
