import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InnertablePage } from './innertable.page';

describe('InnertablePage', () => {
  let component: InnertablePage;
  let fixture: ComponentFixture<InnertablePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InnertablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
