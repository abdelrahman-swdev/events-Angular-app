import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IUser } from './user.model';
import { catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class AuthService {
    currentUser!: IUser;

    constructor(private http: HttpClient){}

    loginUser(userName:string, password:string) {

        const loginInfo = {username : userName, password : password};
        const options = {headers: new HttpHeaders({'content-type' : 'application/json'})};
        
        return this.http.post('/api/login', loginInfo, options)
        .pipe(tap((data:any) => {
            this.currentUser = <IUser>data['user'];
        }))
        .pipe(catchError(err => {
            return of(false);
        }));
        
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthStatus() {
        this.http.get('/api/currentIdentity')
        .pipe(tap(data => {
            if(data instanceof Object){
                this.currentUser = <IUser>data;
            }
        }))
        .subscribe();
    }

    updateUser(formValues: any) {
        this.currentUser.firstName = formValues.firstName;
        this.currentUser.lastName = formValues.lastName;

        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser
        , {headers: new HttpHeaders({'content-type':'application/json'})})
    }

    logout() {
        this.currentUser = {} as IUser;
        
        const options = {headers: new HttpHeaders({'content-type' : 'application/json'})};

        return this.http.post('/api/logout', {}, options);
    }
}