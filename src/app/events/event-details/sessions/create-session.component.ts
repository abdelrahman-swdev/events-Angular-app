import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISession } from "src/app/_models/event.model";

@Component({
    selector:'create-session',
    templateUrl:'./create-session.component.html',
    styles: [`
        em{
            float:right;
            padding-left:10px;
            color:#E05C65;
        }
    `]
})
export class CreateSession implements OnInit {

    newSessionForm!: FormGroup;
    name!:FormControl;
    presenter!:FormControl;
    duration!:FormControl;
    level!:FormControl;
    abstract!:FormControl;

    @Output() addNewSession = new EventEmitter();
    @Output() cancelAddMode = new EventEmitter();

    constructor(){
    }


    ngOnInit(): void {
        this.name = new FormControl('',Validators.required);
        this.presenter = new FormControl('',Validators.required);
        this.duration = new FormControl('',Validators.required);
        this.level = new FormControl('',Validators.required);
        this.abstract = new FormControl('', [Validators.required,
             Validators.maxLength(400), 
             this.restrictedWords]);

        this.newSessionForm = new FormGroup({
            name : this.name,
            presenter : this.presenter,
            duration : this.duration,
            level : this.level,
            abstract : this.abstract
        });
    }

    private restrictedWords(control : FormControl): {[key:string]: any} | null {
        if(control.value.includes('foo')){
            return {'restrictedWords': control.value};
        }else{
            return null;
        }
    }

    saveSession(formValues: any){
        const session:ISession = {

            id: NaN,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            abstract:formValues.abstract,
            presenter:formValues.presenter,
            voters:[]
        };
        
        this.addNewSession.emit(session);
    }

    cancel() {
        this.cancelAddMode.emit();
    }
}