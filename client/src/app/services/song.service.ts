import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASEURL + "/song";

@Injectable()
export class SongService {

  private options = {withCredentials:true};

  constructor(private http: Http) { }

  getUserSongs () {
    return this.http.get(`${BASE_URL}/collection`, this.options)
      .map(res => res.json())
  }
  
}