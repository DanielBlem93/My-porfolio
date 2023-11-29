import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjektComponent } from './projekt.component';

describe('PorjektComponent', () => {
  let component: ProjektComponent;
  let fixture: ComponentFixture<ProjektComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjektComponent]
    });
    fixture = TestBed.createComponent(ProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
