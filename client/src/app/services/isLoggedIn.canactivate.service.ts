import { CanActivate } from '@angular/router';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';

import {AuthService} from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class IsLoggedInService implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.getUser()){
      console.log(this.auth.getUser());
      return true;
    }
    else{
      console.log(this.auth.getUser());
      this.router.navigate(['/']);
      return false;
    }
  }
}
