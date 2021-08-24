import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';      

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifyService:ToastrService) { }

  Success(msg:string){
    this.notifyService.success(msg);
  }
  
  Error(msg:string){
    this.notifyService.error(msg);
  }

  Warning(msg:string){
    this.notifyService.warning(msg);
  }

  Info(msg:string){
    this.notifyService.info(msg);
  }
}
