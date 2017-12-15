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
    amplifier:"",
    pedals:[{}]
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
        console.log(song);
        this.song = song;
        this.artist = song.song.artist;
        this.name = song.song.name;
        this.tab = song.song.textTab;
        this.guitAr = song.user.guitArray;
        this.ampliAr = song.user.ampliArray;
        this.pedAr = song.user.pedArray;
      });
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  submitForm(form){
    this.formInfo.artist = form.value.artist;
    this.formInfo.name = form.value.title;
    this.formInfo.texTab = form.value.tab;
    this.formInfo.guitar = form.value.guitar;
    this.formInfo.amplifier = form.value.ampli;

    let objectCosas = [];
    let array1=[];
    let array2=[];
    let nbr="";
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
        array1.push(prueba[0]);
      }
    }
    array2 = array1.filter( this.onlyUnique );
    let settingsToObject= [];

    for (let e=0; e<array2.length;e++){
      for (let x = 0; x < arrayParaTrabajar.length ; x++){
        if (array2[e] == arrayParaTrabajar[x][0]){
          nbr= arrayParaTrabajar[x][1];
          settingsToObject.push({ setting: arrayParaTrabajar[x][2],
                                  value: arrayParaTrabajar[x][3]});
        }
      }
      objectCosas.push({
        pedal:nbr,
        settings: settingsToObject
      })
      settingsToObject=[];
    }
    this.formInfo.pedals = objectCosas;
    // console.log(this.formInfo);
    console.log(`Updating the song`);
    // console.log(this.song.song);
    this.songServ.editSong(this.formInfo, this.song.song._id)
      .subscribe(() => {
        this.router.navigate(['/songCollection']);
        console.log("Song updated");
      });
  }
}
