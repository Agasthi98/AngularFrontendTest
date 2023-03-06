import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventService } from 'src/app/Service/event.service';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent {
  simpleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private toastService: HotToastService,
    private dialogRef: MatDialogRef<EditEventComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {
    console.log(this.data);
  }

  ngOnInit(): void {
    this.createform();
  }

  createform() {
    // this.simpleForm = this.fb.group({
    //   Title: [''],
    //   Date: [''],
    // });

    this.simpleForm = new FormGroup({
      Title: new FormControl('',Validators.required),
      Date: new FormControl('',[Validators.required])
    })
        this.setItemData()
  }

  setItemData() {
    this.simpleForm.setValue({
      Title: this.data?.Title,
      Date: this.data?.Date,
    });
  }

  submitEvent(){
    const data = this.simpleForm.value
    this.eventService.updateEventData(this.data.id,data).subscribe({
      next:(value) => {
        console.log(value)
        this.dialogRef.close(value);
      },
      error: (err) => {
        this.toastService.error(err)
      }
    })
    console.log(data)
  }

}
