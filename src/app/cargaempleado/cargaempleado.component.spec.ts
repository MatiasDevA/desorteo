import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaempleadoComponent } from './cargaempleado.component';

describe('CargaempleadoComponent', () => {
  let component: CargaempleadoComponent;
  let fixture: ComponentFixture<CargaempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargaempleadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargaempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
