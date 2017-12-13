import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASEURL + "/pedal";

@Injectable()
export class PedalService {

  private options = {withCredentials:true};

  constructor(private http: Http) { }

  getUserPedals () {
    return this.http.get(`${BASE_URL}/collection`, this.options)
      .map(res => res.json())
  }

  get (id) {
    return this.http.get(`${BASE_URL}/collection/${id}`, this.options)
      .map((res) => res.json());
  }

  create (info){
    return this.http.post(`${BASE_URL}/new`, {info}, this.options)
      .map(res => res.json())
  }

  delete (id){
    return this.http.delete(`${BASE_URL}/collection/${id}`, this.options)
      .map(res=>res.json())
  }
}
