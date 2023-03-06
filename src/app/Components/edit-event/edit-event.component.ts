import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService } from 'src/app/Service/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
})
export class EditEventComponent {
  simpleForm: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService) {}

  ngOnInit(): void {
    this.createform();
  }


  createform() {
    this.simpleForm = this.fb.group({
      Title: [''],
      Date: [''],
    });
  }
}
