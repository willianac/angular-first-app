import { TestBed } from '@angular/core/testing';

import { ListaCarrosResolver } from './lista-carros.resolver';

describe('ListaCarrosResolver', () => {
  let resolver: ListaCarrosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ListaCarrosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
