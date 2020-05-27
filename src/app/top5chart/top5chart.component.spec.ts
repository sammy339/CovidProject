import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top5chartComponent } from './top5chart.component';

describe('Top5chartComponent', () => {
  let component: Top5chartComponent;
  let fixture: ComponentFixture<Top5chartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top5chartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top5chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
