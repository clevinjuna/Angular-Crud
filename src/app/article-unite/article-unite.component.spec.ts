import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleUniteComponent } from './article-unite.component';

describe('ArticleUniteComponent', () => {
  let component: ArticleUniteComponent;
  let fixture: ComponentFixture<ArticleUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleUniteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
