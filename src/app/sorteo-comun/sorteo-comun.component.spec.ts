import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SorteoComunComponent } from './sorteo-comun.component';

describe('SorteoComunComponent', () => {
  let component: SorteoComunComponent;
  let fixture: ComponentFixture<SorteoComunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SorteoComunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SorteoComunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
