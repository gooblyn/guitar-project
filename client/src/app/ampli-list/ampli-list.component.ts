import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AmplifierService } from '../services/ampli.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ampli-list',
  templateUrl: './ampli-list.component.html',
  styleUrls: ['./ampli-list.component.css']
})

export class AmpliListComponent implements OnInit {
  ampliList;

  constructor(
    public auth: AuthService,
    public ampli: AmplifierService,
    public router: Router
  ) { }

  ngOnInit() {
    this.ampli.getUserAmplis()
      .map(ampliList => this.ampliList = ampliList)
      .subscribe();
  }

}
