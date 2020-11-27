import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudySecondComponent } from './case-study-second.component';

describe('CaseStudySecondComponent', () => {
  let component: CaseStudySecondComponent;
  let fixture: ComponentFixture<CaseStudySecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudySecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudySecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
