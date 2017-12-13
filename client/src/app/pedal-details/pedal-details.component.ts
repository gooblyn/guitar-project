import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { PedalService } from '../services/pedal.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedal-details',
  templateUrl: './pedal-details.component.html',
  styleUrls: ['./pedal-details.component.css']
})
export class PedalDetailsComponent implements OnInit {

  pedal: any;
  setPedal: [String];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pedalServ: PedalService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getPedalDetails(params['id']);
    });
  }

  getPedalDetails(id) {
    this.pedalServ.get(id)
      .subscribe((pedal) => {
        this.pedal = pedal;
        this.setPedal = pedal.setArray;
      });
  }

  deletePedal() {
    this.pedalServ.delete(this.pedal._id)
      .subscribe(() => {
        this.router.navigate(['/pedalCollection']);
        console.log("delete the pedal");
      });
  }
}
