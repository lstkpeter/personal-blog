import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexClassifyComponent } from './index-classify.component';

describe('IndexClassifyComponent', () => {
  let component: IndexClassifyComponent;
  let fixture: ComponentFixture<IndexClassifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexClassifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexClassifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
