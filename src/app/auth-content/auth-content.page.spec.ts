import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthContentPage } from './auth-content.page';

describe('AuthContentPage', () => {
  let component: AuthContentPage;
  let fixture: ComponentFixture<AuthContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
