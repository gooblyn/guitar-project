import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PedalService } from '../services/pedal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedal-list',
  templateUrl: './pedal-list.component.html',
  styleUrls: ['./pedal-list.component.css']
})
export class PedalListComponent implements OnInit {
  pedalList;

  constructor(
    public auth: AuthService,
    public pedal: PedalService,
    public router: Router
  ) { }

  ngOnInit() {
    this.pedal.getUserPedals()
      .map(pedalList => this.pedalList = pedalList)
      .subscribe();
  }

}
