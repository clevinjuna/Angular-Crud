import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutArticlesComponent } from './ajout-articles.component';

describe('AjoutArticlesComponent', () => {
  let component: AjoutArticlesComponent;
  let fixture: ComponentFixture<AjoutArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
