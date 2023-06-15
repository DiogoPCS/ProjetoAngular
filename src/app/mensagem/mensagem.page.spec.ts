import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensagemPage } from './mensagem.page';

describe('MensagemPage', () => {
  let component: MensagemPage;
  let fixture: ComponentFixture<MensagemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
