import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConfirmDialogBoxComponent } from './delete-confirm-dialog-box.component';

describe('DeleteConfirmDialogBoxComponent', () => {
  let component: DeleteConfirmDialogBoxComponent;
  let fixture: ComponentFixture<DeleteConfirmDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConfirmDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConfirmDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
