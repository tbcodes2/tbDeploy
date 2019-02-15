import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraViewComponent } from './jira-view.component';

describe('JiraViewComponent', () => {
  let component: JiraViewComponent;
  let fixture: ComponentFixture<JiraViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
