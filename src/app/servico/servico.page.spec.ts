import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicoPage } from './servico.page';

describe('ServicoPage', () => {
  let component: ServicoPage;
  let fixture: ComponentFixture<ServicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
