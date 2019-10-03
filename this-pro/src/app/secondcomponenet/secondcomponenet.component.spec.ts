import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondcomponenetComponent } from './secondcomponenet.component';

describe('SecondcomponenetComponent', () => {
  let component: SecondcomponenetComponent;
  let fixture: ComponentFixture<SecondcomponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondcomponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondcomponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
