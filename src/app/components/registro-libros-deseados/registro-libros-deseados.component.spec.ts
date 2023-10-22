import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroLibrosDeseadosComponent } from './registro-libros-deseados.component';

describe('RegistroLibrosDeseadosComponent', () => {
  let component: RegistroLibrosDeseadosComponent;
  let fixture: ComponentFixture<RegistroLibrosDeseadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroLibrosDeseadosComponent]
    });
    fixture = TestBed.createComponent(RegistroLibrosDeseadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
