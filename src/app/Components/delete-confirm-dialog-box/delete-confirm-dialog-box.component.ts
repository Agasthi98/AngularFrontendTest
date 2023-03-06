import { Component, Inject } from '@angular/core';
import { EventService } from 'src/app/Service/event.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-delete-confirm-dialog-box',
  templateUrl: './delete-confirm-dialog-box.component.html',
  styleUrls: ['./delete-confirm-dialog-box.component.scss'],
})
export class DeleteConfirmDialogBoxComponent {
  constructor(
    private eventService: EventService,
    private toastService: HotToastService,
    private dialogRef: MatDialogRef<DeleteConfirmDialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(this.data);
  }

  /*
  Delete an event
  */
  deleteEvent() {
    this.eventService.deleteRecord(this.data.id).subscribe({
      next: (value) => {
        console.log('Record deleted successfully');
        this.toastService.error('Event deleted succesfully !', {
          className: 'notification-error',
          position: 'top-right',
        });
        this.dialogRef.close(value);
      },
      error: (err) => {
        this.toastService.error(err)
      }
    });
  }
}
