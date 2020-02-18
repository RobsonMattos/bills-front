import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFullComponent } from './login-full.component';

describe('LoginFullComponent', () => {
  let component: LoginFullComponent;
  let fixture: ComponentFixture<LoginFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
