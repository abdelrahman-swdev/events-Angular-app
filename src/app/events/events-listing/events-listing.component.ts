import { Component, OnInit } from '@angular/core';
import { EventService } from './../event-thumbnail/event.service';
import { NotificationService } from './../../common/toastr/toastr.service';
import { IEvent } from './../../_models/event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-events-listing',
    templateUrl: './events-listing.component.html',
    
})
export class EventsListingComponent implements OnInit {
    
  events!: IEvent[];
  constructor(private eventService: EventService,
    private route:ActivatedRoute) {

  }

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events']
  }

  /*ShowNotify(name: string){
    this.notifyService.Info(name);
  }*/
}