import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceitapaoqueijoPage } from './receitapaoqueijo.page';

describe('ReceitapaoqueijoPage', () => {
  let component: ReceitapaoqueijoPage;
  let fixture: ComponentFixture<ReceitapaoqueijoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceitapaoqueijoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
