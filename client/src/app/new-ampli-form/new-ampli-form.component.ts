import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AmplifierService } from '../services/ampli.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-ampli-form',
  templateUrl: './new-ampli-form.component.html',
  styleUrls: ['./new-ampli-form.component.css']
})
export class NewAmpliFormComponent implements OnInit {

  formInfo = {
    trade:"",
    model:"",
    power:"",
    year:0
  }

  constructor(
    public auth: AuthService,
    public ampli: AmplifierService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  create(){
    const {trade, model, power, year} = this.formInfo;
    if (trade != "" && model != ""){
      console.log(`Creating a new ampli`);
      this.ampli.create(trade, model, power,year)
        .subscribe(() => {
          this.router.navigate(['/ampliCollection']);
          console.log("Ampli created");
        });
    }
    else{
      console.log("You must provide a trade and a model for your new ampli");
    }
  }
}
