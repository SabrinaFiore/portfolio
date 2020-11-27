import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyFirstComponent } from './case-study-first.component';

describe('CaseStudyFirstComponent', () => {
  let component: CaseStudyFirstComponent;
  let fixture: ComponentFixture<CaseStudyFirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudyFirstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
