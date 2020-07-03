import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { cardLComponent } from './card-l.component';

describe('cardLComponent', () => {
  let component: cardLComponent;
  let fixture: ComponentFixture<cardLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cardLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cardLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
