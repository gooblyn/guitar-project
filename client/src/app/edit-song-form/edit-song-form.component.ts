import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SongService } from '../services/song.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-song-form',
  templateUrl: './edit-song-form.component.html',
  styleUrls: ['./edit-song-form.component.css']
})
export class EditSongFormComponent implements OnInit {
  artist;
  title;
  tab;
  guitAr;
  ampliAr;
  pedAr;
  song: any;
  formInfo = {
    artist:"",
    name:"",
    texTab:"",
    guitar:"",
    ampli:"",
    pedal:[{}]
  };
  constructor(
    private router: Router,
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
    this.songServ.getEdit(id)
      .subscribe((song) => {
        this.song = song;
        this.artist = song.song.artist;
        this.title = song.song.name;
        this.tab = song.song.textTab;
        this.guitAr = song.user.guitArray;
        this.ampliAr = song.user.ampliArray;
        this.pedAr = song.user.pedArray;
      });
  }

  submitForm(form){
    console.log(form);
    this.formInfo.artist = form.value.artist;
    this.formInfo.name = form.value.name;
    this.formInfo.texTab = form.value.tab;
    this.formInfo.guitar = form.value.guitar;
    this.formInfo.ampli = form.value.ampli;
    for (let key in form.value.value) {
      if (form.value.value[key]===true)
        this.formInfo.pedal.push({pedal:key});
    }
    console.log(this.formInfo);
  }
}
