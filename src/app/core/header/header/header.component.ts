import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../user/auth.service';
import { ISession } from 'src/app/_models/event.model';
import { EventService } from './../../../events/event-thumbnail/event.service';
import { IEvent } from './../../../_models/event.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchTerm = '';
  foundSessions!: any;
  events!: IEvent[];

  constructor(public auth:AuthService, private eventService:EventService) { }

  ngOnInit(): void {
    this.eventService.getAll().subscribe(data => {
      this.events = data;
    })
  }

  searchSessions(searchTerm: string) {
    this.eventService.searchSessions(searchTerm).subscribe
    (sessions => {
      this.foundSessions = sessions;
    });
  }

}
