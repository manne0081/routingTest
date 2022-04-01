import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChild02DetailComponent } from './home-child02-detail.component';

describe('HomeChild02DetailComponent', () => {
  let component: HomeChild02DetailComponent;
  let fixture: ComponentFixture<HomeChild02DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeChild02DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeChild02DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
