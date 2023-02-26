import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroDetalhesComponent } from './carro-detalhes.component';

describe('CarroDetalhesComponent', () => {
  let component: CarroDetalhesComponent;
  let fixture: ComponentFixture<CarroDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroDetalhesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
