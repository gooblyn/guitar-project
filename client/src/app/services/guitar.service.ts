import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';

const BASE_URL = environment.BASEURL + "/guitar";

@Injectable()
export class GuitarService {

  private options = {withCredentials:true};

  constructor(private http: Http) { }

  getUserGuitars () {
    return this.http.get(`${BASE_URL}/collection`, this.options)
      .map(res => res.json())
  }

  get (id) {
    return this.http.get(`${BASE_URL}/collection/${id}`, this.options)
      .map((res) => res.json());
  }

  create (trade:string, model:string, year:number){
    return this.http.post(`${BASE_URL}/new`, {trade,model,year}, this.options)
      .map(res => res.json())
  }

  delete (id){
    return this.http.delete(`${BASE_URL}/collection/${id}`, this.options)
      .map(res=>res.json())
  }
}
