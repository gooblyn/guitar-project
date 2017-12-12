import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GuitarService } from '../services/guitar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-guitar-form',
  templateUrl: './new-guitar-form.component.html',
  styleUrls: ['./new-guitar-form.component.css']
})

export class NewGuitarFormComponent implements OnInit {

  formInfo = {
    trade:"",
    model:"",
    year:0
  }

  constructor(
    public auth: AuthService,
    public guitar: GuitarService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  create(){
    const {trade, model, year} = this.formInfo;
    if (trade != "" && model != ""){
      console.log(`Creating a new guitar`);
      this.guitar.create(trade, model, year)
        // .map(() )
        .subscribe(() => {
          this.router.navigate(['/profile']);
          console.log("Gutar created");
        });
    }
    else{
      console.log("You must provide a trade and a model for your new guitar");
    }
  }
}
