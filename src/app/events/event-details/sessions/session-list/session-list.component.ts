import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ISession } from 'src/app/_models/event.model';
import { AuthService } from './../../../../user/auth.service';
import { VotingService } from './../upvote/voting.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions!: ISession[];
  @Input() filterBy!:string;
  @Input() sortBy!:string;
  @Input() eventId!: number;

  visibleSessions: ISession[] = [];

  constructor(public auth:AuthService, private votingService: VotingService) { }

  toggleVote(session: ISession) {
    
    if(this.userHasVoted(session)){
      this.votingService.deleteVoter(this.eventId,session, this.auth.currentUser.userName);
    } else {
      this.votingService.addVoter(this.eventId,session, this.auth.currentUser.userName);
    }

    if(this.sortBy === 'votes') {
      this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession) {
    return this.votingService.userHasVoted(session, this.auth.currentUser.userName);
  }

  ngOnChanges() {
    if(this.sessions){
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) :
      this.visibleSessions.sort(sortByVotesDesc)
    }
  }

  filterSessions(filter: string) {
    if(filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter
      });
    }
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if(s1.name > s2.name){
    return 1;
  } else if(s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
