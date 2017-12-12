import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { GuitarService } from '../services/guitar.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guitar-details',
  templateUrl: './guitar-details.component.html',
  styleUrls: ['./guitar-details.component.css']
})
export class GuitarDetailsComponent implements OnInit {
  guitar: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private guitarServ: GuitarService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getGuitarDetails(params['id']);
    });
  }

  getGuitarDetails(id) {
    this.guitarServ.get(id)
      .subscribe((guitar) => {
        this.guitar = guitar;
      });
  }

  deleteGuitar() {
    this.guitarServ.delete(this.guitar._id)
      .subscribe(() => {
        this.router.navigate(['/guitarCollection']);
        console.log("delete the guitar");
      });
  }
}
