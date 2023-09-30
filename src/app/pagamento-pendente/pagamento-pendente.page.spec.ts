import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagamentoPendentePage } from './pagamento-pendente.page';

describe('PagamentoPendentePage', () => {
  let component: PagamentoPendentePage;
  let fixture: ComponentFixture<PagamentoPendentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PagamentoPendentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
