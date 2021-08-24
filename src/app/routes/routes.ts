import { Routes } from "@angular/router";
import { EventDetailsComponent } from "../events/event-details/event-details.component";
import { EventsListingComponent } from './../events/events-listing/events-listing.component';
import { EventAddComponent } from './../events/event-add/event-add.component';
import { NotfoundComponent } from './../errors/notfound/notfound.component';
import { CreateSession } from "../events/event-details/sessions/create-session.component";
import { EventListResolver } from "../events/events-listing/events-listing.resolver";
import { EventResolver } from "../events/event-details/event.resolver.service";


export const appRoutes: Routes = [
    {path: 'events/new', component: EventAddComponent},
    {path: 'events', component: EventsListingComponent, resolve:{events:EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, resolve:{event:EventResolver}},
    {path: 'notfound', component: NotfoundComponent},
    {path: 'events/session/new', component:CreateSession},

    {path: 'user',
    loadChildren: () => import('../user/user.module').then(m => m.userModule)},

    {path: '', redirectTo: '/events', pathMatch: 'full'}
];