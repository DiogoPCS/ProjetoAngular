import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagamentoEfetuadoPage } from './pagamento-efetuado.page';

describe('PagamentoEfetuadoPage', () => {
  let component: PagamentoEfetuadoPage;
  let fixture: ComponentFixture<PagamentoEfetuadoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagamentoEfetuadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
