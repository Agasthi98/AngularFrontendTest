import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanaComponent } from './dana.component';

describe('DanaComponent', () => {
  let component: DanaComponent;
  let fixture: ComponentFixture<DanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
