import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitabolomilhoPage } from './receitabolomilho.page';

describe('ReceitabolomilhoPage', () => {
  let component: ReceitabolomilhoPage;
  let fixture: ComponentFixture<ReceitabolomilhoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitabolomilhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
