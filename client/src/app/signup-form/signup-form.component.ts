import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  formInfo = {
    username: "",
    password: "",
    name: "",
    email: ""
  }

  constructor(public auth: AuthService) { }
  ngOnInit() { }

  signup() {
    const {username, password, name, email} = this.formInfo;
    if (username != "" && password != "" && name != "" && email != "") {
      console.log(`Signing Up with ${username}, ${password}, ${name} and ${email}`);
      this.auth.signup(username, password,name, email)
        .map(user=>console.log(user))
        .subscribe();
    }
    else {
      console.log("You must fill all the fields");
    }
  }
}
