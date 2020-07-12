import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourPartComponent } from './four-part.component';

describe('FourPartComponent', () => {
  let component: FourPartComponent;
  let fixture: ComponentFixture<FourPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
