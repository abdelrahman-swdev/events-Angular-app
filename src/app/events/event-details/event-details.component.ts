import { Component, OnInit } from '@angular/core';
import { EventService } from '../event-thumbnail/event.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from './../../_models/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event:any;
  addMode = false;
  filterBy = 'all';
  sortBy = 'votes';

  constructor(private eventService: EventService,
     private currentRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentRoute.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
      this.filterBy = 'all';
      this.sortBy = 'votes';
    });
  }

  addSession() {
    this.addMode = !this.addMode;
  }

  saveNewSession(session: ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map((s: { id: any; }) => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventService.saveEvent(this.event).subscribe(() => {
      this.addMode = false;
    });
  }

  canelAddMode() {
    this.addMode = !this.addMode;
  }

}
