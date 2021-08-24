import { Component, Input } from '@angular/core';
import { IEvent } from './../../_models/event.model';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})

export class EventComponent {
    @Input() event!: IEvent;
}