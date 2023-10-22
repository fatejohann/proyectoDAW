import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarLibrosComponent } from './registrar-libros.component';

describe('RegistrarLibrosComponent', () => {
  let component: RegistrarLibrosComponent;
  let fixture: ComponentFixture<RegistrarLibrosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarLibrosComponent]
    });
    fixture = TestBed.createComponent(RegistrarLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
