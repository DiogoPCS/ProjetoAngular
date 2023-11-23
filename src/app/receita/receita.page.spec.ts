import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitaPage } from './receita.page';

describe('ReceitaPage', () => {
  let component: ReceitaPage;
  let fixture: ComponentFixture<ReceitaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
