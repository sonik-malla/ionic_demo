import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeChildPage } from './home-child.page';

describe('HomeChildPage', () => {
  let component: HomeChildPage;
  let fixture: ComponentFixture<HomeChildPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeChildPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeChildPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
