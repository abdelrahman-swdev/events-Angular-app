import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrls: ['./simple-modal.component.css']
})
export class SimpleModalComponent {

  @Input() title!:string;
  @Input() elementId!:string;
  @Input() closable = false;

  @ViewChild('modalContainer') modal!: ElementRef;

  constructor() { }

  closeModal() {
    if(this.closable){
      $(this.modal.nativeElement).modal('hide');
    }
  }

}
