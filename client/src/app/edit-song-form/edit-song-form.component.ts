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
  name;
  tab;
  guitAr;
  ampliAr;
  pedAr;
  options:object={};
  song: any;
  formInfo = {
    artist:"",
    name:"",
    texTab:"",
    guitar:"",
    ampli:"",
    pedal:[{}]
  };
  numbers = ["1","2","3","4","5","6","7","8","9","10","11","12"];
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
        this.name = song.song.name;
        this.tab = song.song.textTab;
        this.guitAr = song.user.guitArray;
        this.ampliAr = song.user.ampliArray;
        this.pedAr = song.user.pedArray;
      });
  }

  submitForm(form){
    this.formInfo.artist = form.value.artist;
    this.formInfo.name = form.value.title;
    this.formInfo.texTab = form.value.tab;
    this.formInfo.guitar = form.value.guitar;
    this.formInfo.ampli = form.value.ampli;

    let objectCosas = [];
    let array=[];
    let prueba;
    let arrayParaTrabajar = [];
    for (let P in form.value){
      if(P.includes('object')){
        prueba = P.split(".");
        if (form.value[P]=="")
          prueba.push("12");
        else
          prueba.push(form.value[P]);
        prueba.shift();
        // console.log(prueba);
      if (prueba.length > 0)
        arrayParaTrabajar.push(prueba);
      }
    }
    let settingsToObject= [];
    for (let x = 0; x < arrayParaTrabajar.length ; x++){
      settingsToObject.push({ setting: arrayParaTrabajar[x][1],
                              value: arrayParaTrabajar[x][2]});
    }
    objectCosas.push({
      pedal:prueba[0],
      settings: settingsToObject
    })
    this.formInfo.pedal = objectCosas;
    console.log(this.formInfo);
  }
}
