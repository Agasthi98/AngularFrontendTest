import { EventService } from './../../Service/event.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { MatDialog } from '@angular/material/dialog';
import { EditEventComponent } from '../edit-event/edit-event.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  simpleForm: FormGroup;
  record: any;
  public events: any = [];
  formattedDateTime: string;
  eventID: string;

  notifications = [
    {
      icon: 'assets/icon-1@2x.png',
      Title: 'Breakfast Dana',
      Date: '07 July, 2021',
      Background: '#ffeaa4',
      Border: '#f3c739',
    },
    {
      icon: 'assets/icon-2@2x.png',
      Title: 'Evening pahan pooja',
      Date: '16 July, 2021',
      Background: '#ffeaa4',
      Border: '#f3c739',
    },
    {
      icon: 'assets/icon-3@2x.png',
      Title: 'No classes',
      Description: 'Mettha class',
      Date: '30 July, 2021',
      Background: '#fcb2aa',
      Border: '#e72610',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private toastService: HotToastService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.createform();
    this.getAllEvents();
  }

  createform() {
    this.simpleForm = this.fb.group({
      Title: [''],
      Date: [''],
    });
  }

  onSubmit() {
    const formData = this.simpleForm.value;
    const date = new Date(formData.Date); // create a new Date object from the form value
    const now = new Date(); // create a new Date object with the current date and time
    date.setHours(now.getHours()); // set the hours of the selected date to the current hours
    date.setMinutes(now.getMinutes()); // set the minutes of the selected date to the current minutes
    date.setSeconds(now.getSeconds()); // set the seconds of the selected date to the current seconds
    formData.Date = date.toISOString(); // convert the date to ISO format with UTC

    this.eventService.AddEvent(this.simpleForm.value).subscribe({
      next: (res) => {
        this.toastService.success('Event added succesfully !', {
          className: 'notification-success',
          position: 'top-right',
        });
        this.simpleForm.reset();
        this.getAllEvents();
      },
      error: (err) => {
        console.log(err?.message);
        this.toastService.error(err?.message);
      },
    });
  }

  getAllEvents() {
    this.eventService.GetAllEvents().subscribe((res) => {
      this.events = res;

      for (const event of this.events) {
        const dateString = event.Date;
        this.eventID = event.id; // get the dateString from the 'Date' property of the event object
        const date = new Date(dateString); // parse the string into a Date object
        const formattedDate = date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }); // format the date into a string in the format "dd MMM yyyy"
        const formattedTime = date.toISOString().slice(11, 19); // extract the UTC time from the Date object using the toISOString() method and the slice() method
        this.formattedDateTime = `${formattedDate} ${formattedTime}`; // combine the date and time strings
      }
    });
  }

  deleteEvent(eventID: any) {
    this.eventService.deleteRecord(eventID.id).subscribe(
      (response) => {
        console.log('Record deleted successfully');
        this.toastService.error('Event deleted succesfully !', {
          className: 'notification-error',
          position: 'top-right',
        });
        this.simpleForm.reset();
        this.getAllEvents();
      },
      (error) => {
        console.log('Error while deleting record', error);
      }
    );
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditEventComponent, {
      width: '600px',
    });


  }
}
