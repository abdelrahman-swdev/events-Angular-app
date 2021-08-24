import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventsListingComponent } from './events/events-listing/events-listing.component';
import { EventComponent } from './events/event-thumbnail/event.component';
import { HeaderComponent } from './core/header/header/header.component';
import { appRoutes } from './routes/routes';


import { AuthService } from './user/auth.service';
import { EventService } from './events/event-thumbnail/event.service';
import { NotificationService } from './common/toastr/toastr.service';
import { ToastrModule } from 'ngx-toastr';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventAddComponent } from './events/event-add/event-add.component';
import { NotfoundComponent } from './errors/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSession } from './events/event-details/sessions/create-session.component';
import { SessionService } from './events/event-details/sessions/session.service';
import { VotingService } from './events/event-details/sessions/upvote/voting.service';
import { SessionListComponent } from './events/event-details/sessions/session-list/session-list.component';
import { DurationPipe } from './common/pipes/duration.pipe';
import { JqueryService } from './common/Jquery-service/jquery.service';
import { SimpleModalComponent } from './common/modal/simple-modal.component';
import { ModalTriggerDirective } from './common/directives/modal-trigger.directive';
import { UpvoteComponent } from './events/event-details/sessions/upvote/upvote.component';
import { LocationValidator } from './events/event-add/location-validator.directive';
import { EventListResolver } from './events/events-listing/events-listing.resolver';
import { EventResolver } from './events/event-details/event.resolver.service';




@NgModule({
  declarations: [
    AppComponent,
    EventsListingComponent,
    EventComponent,
    HeaderComponent,
    EventDetailsComponent,
    EventAddComponent,
    NotfoundComponent,
    CreateSession,
    SessionListComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
      closeButton: true,
      timeOut: 2000
    })
  ],
  providers: [
      EventService,
      NotificationService,
      AuthService,
      SessionService,
      JqueryService,
      VotingService,
      EventListResolver,
      EventResolver
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
