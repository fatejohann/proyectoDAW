import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroColeccionComponent } from './registro-coleccion.component';

describe('RegistroColeccionComponent', () => {
  let component: RegistroColeccionComponent;
  let fixture: ComponentFixture<RegistroColeccionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroColeccionComponent]
    });
    fixture = TestBed.createComponent(RegistroColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
