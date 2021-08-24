import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName!:string;
  password!:string;
  loginInvalid = false;

  constructor(private authServic: AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  login(loginFormValues:any) {
    this.authServic.loginUser(loginFormValues.userName, loginFormValues.password)
    .subscribe(res => {
      if(!res) {
        this.loginInvalid = true;
      }else {
        this.router.navigate(['events']);
      }
    });
    
  }

  cancel() {
    this.router.navigate(['events'])
  }

}
