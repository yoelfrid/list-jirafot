import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraffAdministrationComponent } from './jiraff-administration.component';

describe('JiraffAdministrationComponent', () => {
  let component: JiraffAdministrationComponent;
  let fixture: ComponentFixture<JiraffAdministrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraffAdministrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraffAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
