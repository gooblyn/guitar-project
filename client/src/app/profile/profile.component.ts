import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  songList;

  constructor(
    public auth: AuthService,
    public userS: UserService,
    public router: Router){ }

  ngOnInit() {
    this.userS.getProfileSongs()
      .map(songList =>  this.songList = songList)
      .subscribe();
  }

  logout(){
    this.auth.logout().subscribe(()=> this.router.navigate(['/']));
  }
}
