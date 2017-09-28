import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateserverComponent } from './createserver.component';

describe('CreateserverComponent', () => {
  let component: CreateserverComponent;
  let fixture: ComponentFixture<CreateserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
