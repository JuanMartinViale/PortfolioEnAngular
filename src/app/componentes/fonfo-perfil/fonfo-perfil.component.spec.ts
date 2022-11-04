import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FonfoPerfilComponent } from './fonfo-perfil.component';

describe('FonfoPerfilComponent', () => {
  let component: FonfoPerfilComponent;
  let fixture: ComponentFixture<FonfoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FonfoPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FonfoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
