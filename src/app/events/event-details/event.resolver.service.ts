import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EventService } from './../event-thumbnail/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {

    constructor(private eventService: EventService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.eventService.getById(route.params['id']);
    }

}
