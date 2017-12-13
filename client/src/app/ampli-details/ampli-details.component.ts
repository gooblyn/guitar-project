import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AmplifierService } from '../services/ampli.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ampli-details',
  templateUrl: './ampli-details.component.html',
  styleUrls: ['./ampli-details.component.css']
})
export class AmpliDetailsComponent implements OnInit {

  ampli: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ampliSer: AmplifierService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getAmpliDetails(params['id']);
    });
  }

  getAmpliDetails(id) {
    this.ampliSer.get(id)
      .subscribe((ampli) => {
        this.ampli = ampli;
      });
  }

  deleteAmpli() {
    this.ampliSer.delete(this.ampli._id)
      .subscribe(() => {
        this.router.navigate(['/ampliCollection']);
        console.log("delete the ampli");
      });
  }
}
