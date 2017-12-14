import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'My Guitar-Project';

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() { this.auth.home = false;}

}
