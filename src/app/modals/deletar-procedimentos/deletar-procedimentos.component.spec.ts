import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeletarProcedimentosComponent } from './deletar-procedimentos.component';

describe('DeletarProcedimentosComponent', () => {
  let component: DeletarProcedimentosComponent;
  let fixture: ComponentFixture<DeletarProcedimentosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletarProcedimentosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeletarProcedimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
