import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenWomenComponent } from './men-women.component';

describe('MenWomenComponent', () => {
  let component: MenWomenComponent;
  let fixture: ComponentFixture<MenWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
