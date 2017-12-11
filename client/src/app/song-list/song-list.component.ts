import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SongService } from '../services/song.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  songList;
  // user: object;
  constructor(
    public auth: AuthService,
    public song: SongService,
    public router: Router){
    //   this.auth.userLoginEvent.subscribe( user =>{
    //   this.user = user;
    // })
  }

  ngOnInit() {
    this.song.getUserSongs()
    .map(songList => this.songList = songList)
    .subscribe();
  }

}
