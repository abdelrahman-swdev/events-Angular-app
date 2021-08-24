import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  @Input() count = 0;
  @Input() voted!:boolean;
  @Output() vote = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.vote.emit({});
  }

}
