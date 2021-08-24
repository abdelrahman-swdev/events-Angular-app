import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvent } from './../../_models/event.model';
import { EventService } from './../event-thumbnail/event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  event!: any;
  constructor(private router:Router, private eventService: EventService) { }

  ngOnInit(): void {
  }

  saveEvent(formValues: any){
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.router.navigate(['/events']);
    });

  }

  cancel() {
    this.router.navigate(['/events']);
  }

}
