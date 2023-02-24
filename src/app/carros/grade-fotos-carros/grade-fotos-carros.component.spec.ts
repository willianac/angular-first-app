import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeFotosCarrosComponent } from './grade-fotos-carros.component';

describe('GradeFotosCarrosComponent', () => {
  let component: GradeFotosCarrosComponent;
  let fixture: ComponentFixture<GradeFotosCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeFotosCarrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeFotosCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
