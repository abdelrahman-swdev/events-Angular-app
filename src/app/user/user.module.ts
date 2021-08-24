import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from './porfile/porfile.component';
import { userRoutes } from './user-routes';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations:[
        ProfileComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    providers: [

    ]
})


export class userModule {
}