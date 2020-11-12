import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnauthContentPage } from './unauth-content.page';

describe('UnauthContentPage', () => {
  let component: UnauthContentPage;
  let fixture: ComponentFixture<UnauthContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnauthContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnauthContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
