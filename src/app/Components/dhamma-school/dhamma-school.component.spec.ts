import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhammaSchoolComponent } from './dhamma-school.component';

describe('DhammaSchoolComponent', () => {
  let component: DhammaSchoolComponent;
  let fixture: ComponentFixture<DhammaSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DhammaSchoolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DhammaSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
