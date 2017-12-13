import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PedalService } from '../services/pedal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pedal-form',
  templateUrl: './new-pedal-form.component.html',
  styleUrls: ['./new-pedal-form.component.css']
})
export class NewPedalFormComponent implements OnInit {

  formInfo = {
    trade:"",
    model:"",
    pedType:"",
    setArr:[]
  }

  setList = ["Bases","Blend","Comp","Decay","Delay","Depth","Drive","Feedback",
             "Gate","Level","Mode","Rate","Shape","Speed","Tone","Treble","Volume/Gain"];
  pedType = ["Booster","Chorus","Compressor","Delay","Distorsion","Flanger","Fuzz",
              "Overdrive","Phaser","Reverb","Tremolo","Wah-wah"];

  constructor(
    public auth: AuthService,
    public pedal: PedalService,
    public router: Router
  ) { }

  ngOnInit() {
  }
  submitForm(myForm) {
    this.formInfo.trade = myForm.value.trade;
    this.formInfo.model = myForm.value.model;
    this.formInfo.pedType = myForm.value.type;
    for (let key in myForm.value) {
      if (myForm.value[key]===true)
        this.formInfo.setArr.push(key);
    }
    console.log(`Creating a new pedal`);
    this.pedal.create(this.formInfo)
      .subscribe(() => {
        this.router.navigate(['/pedalCollection']);
        console.log("Pedal created");
      });
  }
}
