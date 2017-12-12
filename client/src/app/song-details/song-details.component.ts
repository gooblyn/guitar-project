import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SongService } from '../services/song.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent implements OnInit {
  song: any;
  constructor(
    private route: ActivatedRoute,
    private songServ: SongService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getSongDetails(params['id']);
    });
  }

  getSongDetails(id) {
    this.songServ.get(id)
      .subscribe((song) => {
        this.song = song;
      });
  }
}
