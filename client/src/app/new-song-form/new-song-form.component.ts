import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SongService } from '../services/song.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-song-form',
  templateUrl: './new-song-form.component.html',
  styleUrls: ['./new-song-form.component.css']
})

export class NewSongFormComponent implements OnInit{

  formInfo = {
    artist:"",
    name:""
  }

  tab;
  constructor(
    public auth: AuthService,
    public song: SongService,
    public router: Router
  ) { }

  ngOnInit() { }

  search() {
    const {artist, name} = this.formInfo;
    if (name != "" && artist != ""){
      console.log(`Import the tab for ${artist} and ${name}`);
      this.song.search(artist, name)
        .map(song => {
          this.tab = song.song;
        })
        .subscribe();
    }
    else{
      console.log("You must provide an artist name and a song title");
    }
  }

  create() {
    const {artist, name} = this.formInfo;
    if (name != "" && artist != ""){
      console.log(`Creating a new song for the artist ${artist} with the tittle ${name}`);
      this.song.create(artist, name)
        .map(song => {
          this.tab = song.song;
        })
        .subscribe();
    }
    else{
      console.log("You must provide an artist name and a song title");
    }
  }

}
