import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullUserProfileComponent } from './full-user-profile.component';

describe('FullUserProfileComponent', () => {
  let component: FullUserProfileComponent;
  let fixture: ComponentFixture<FullUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullUserProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
