import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

interface loginInfo {
  username: string,
  password: string
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent implements OnInit {
  formInfo:loginInfo = {
    username: "",
    password: ""
  }

  constructor (
    public auth: AuthService,
    public router: Router) { }

  ngOnInit() {this.auth.home=true;}

  login () {
    const {username, password} = this.formInfo;
    if (username != "" && password != ""){
      console.log(`Logged in with ${username} and ${password}`);
      this.auth.login(username, password)
        .map(user => console.log(user))
        .subscribe(() => (this.router.navigate(['/profile'])));
    }
    else{
      console.log("You must provide a valid username and a password");
    }
  }

}
