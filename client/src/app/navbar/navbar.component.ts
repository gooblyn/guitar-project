import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout().subscribe(()=> this.router.navigate(['/']));
  }
}
