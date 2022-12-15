import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoPersonalizadoComponent } from './sorteo-personalizado.component';

describe('SorteoPersonalizadoComponent', () => {
  let component: SorteoPersonalizadoComponent;
  let fixture: ComponentFixture<SorteoPersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteoPersonalizadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoPersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
