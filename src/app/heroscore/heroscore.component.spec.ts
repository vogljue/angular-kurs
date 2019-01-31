import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroscoreComponent } from './heroscore.component';

describe('HeroscoreComponent', () => {
  let component: HeroscoreComponent;
  let fixture: ComponentFixture<HeroscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
