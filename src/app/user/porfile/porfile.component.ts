import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { NotificationService } from './../../common/toastr/toastr.service';


@Component({
  templateUrl: './porfile.component.html',
  styleUrls:['./porfile.component.css']
})
export class ProfileComponent implements OnInit {
  firstName!:FormControl
  lastName!:FormControl
  profileForm!: FormGroup;

  constructor(private authService: AuthService,
     private route:Router, 
     private notifyService: NotificationService){}

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser?.firstName,
      [Validators.required,Validators.pattern('[a-zA-Z].*')]);
    this.lastName = new FormControl(this.authService.currentUser?.lastName,
      Validators.required);

    this.profileForm = new FormGroup({
      firstName : this.firstName,
      lastName: this.lastName,
    })
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched
  }
  validateLastName() {
    return this.lastName.valid || this.lastName.untouched
  }

  saveProfile(formValues: any) {
    if(this.profileForm.valid){
      this.authService.updateUser(formValues).subscribe(() => {
        this.notifyService.Success('Profile Updated');
      });
    }
  }

  cancel() {
    this.route.navigate(['events']);
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.route.navigate(['/user/login']);
    })
  }

}