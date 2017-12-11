import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASEURL + "/user";

@Injectable()
export class UserService {
    private options = {withCredentials:true};

  constructor(private http: Http) { }

  getProfileSongs () {
    return this.http.get(`${BASE_URL}/profile`, this.options)
      .map(res => res.json())
  }

}
