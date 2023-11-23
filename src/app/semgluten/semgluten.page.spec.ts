import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SemglutenPage } from './semgluten.page';

describe('SemglutenPage', () => {
  let component: SemglutenPage;
  let fixture: ComponentFixture<SemglutenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SemglutenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
