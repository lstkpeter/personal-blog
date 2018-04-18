import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumListComponent } from './sum-list.component';

describe('SumListComponent', () => {
  let component: SumListComponent;
  let fixture: ComponentFixture<SumListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
