import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GuitarService } from '../services/guitar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guitar-list',
  templateUrl: './guitar-list.component.html',
  styleUrls: ['./guitar-list.component.css']
})
export class GuitarListComponent implements OnInit {
  guitarList;
  constructor(
    public auth: AuthService,
    public guitar: GuitarService,
    public router: Router
  ) { }

  ngOnInit() {
    this.guitar.getUserGuitars()
      .map(guitarList => this.guitarList = guitarList)
      .subscribe();
  }

}
