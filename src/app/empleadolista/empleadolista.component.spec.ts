import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadolistaComponent } from './empleadolista.component';

describe('EmpleadolistaComponent', () => {
  let component: EmpleadolistaComponent;
  let fixture: ComponentFixture<EmpleadolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadolistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
