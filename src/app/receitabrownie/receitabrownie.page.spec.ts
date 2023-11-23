import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitabrowniePage } from './receitabrownie.page';

describe('ReceitabrowniePage', () => {
  let component: ReceitabrowniePage;
  let fixture: ComponentFixture<ReceitabrowniePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitabrowniePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
