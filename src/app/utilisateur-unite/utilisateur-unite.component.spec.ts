import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurUniteComponent } from './utilisateur-unite.component';

describe('UtilisateurUniteComponent', () => {
  let component: UtilisateurUniteComponent;
  let fixture: ComponentFixture<UtilisateurUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurUniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
