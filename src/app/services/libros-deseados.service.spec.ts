import { TestBed } from '@angular/core/testing';

import { LibrosDeseadosService } from './libros-deseados.service';

describe('LibrosDeseadosService', () => {
  let service: LibrosDeseadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibrosDeseadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
