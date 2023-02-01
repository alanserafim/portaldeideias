import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaDeUsuariosComponent } from './lista-de-usuarios.component';

describe('ListaDeUsuariosComponent', () => {
  let component: ListaDeUsuariosComponent;
  let fixture: ComponentFixture<ListaDeUsuariosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaDeUsuariosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaDeUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
