import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitasorvetePage } from './receitasorvete.page';

describe('ReceitasorvetePage', () => {
  let component: ReceitasorvetePage;
  let fixture: ComponentFixture<ReceitasorvetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitasorvetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
