import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundHeadlineCodeComponent } from './playground-headline-code.component';

describe('PlaygroundHeadlineCodeComponent', () => {
  let component: PlaygroundHeadlineCodeComponent;
  let fixture: ComponentFixture<PlaygroundHeadlineCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaygroundHeadlineCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaygroundHeadlineCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
