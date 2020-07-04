import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBoostrapComponent } from './login-boostrap.component';

describe('LoginBoostrapComponent', () => {
  let component: LoginBoostrapComponent;
  let fixture: ComponentFixture<LoginBoostrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginBoostrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
