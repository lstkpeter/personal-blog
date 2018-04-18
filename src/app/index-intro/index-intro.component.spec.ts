import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexIntroComponent } from './index-intro.component';

describe('IndexIntroComponent', () => {
  let component: IndexIntroComponent;
  let fixture: ComponentFixture<IndexIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
