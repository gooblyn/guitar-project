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

  get(id) {
    return this.http.get(`${BASE_URL}/collection/${id}`, this.options)
      .map((res) => res.json());
  }

  search (artist:string, name:string){
    return this.http.post(`${BASE_URL}/search`, {name,artist}, this.options)
      .map(res => res.json())
  }

  create (artist:string, name:string){
    return this.http.post(`${BASE_URL}/new`, {name,artist}, this.options)
      .map(res => res.json())
  }

  cancel (song: any){
    return this.http.delete(`${BASE_URL}/${song}`, this.options)
      .map(res=>res.json())
  }

  save (song, tab) {
    const textTab = tab;
    return this.http.put(`${BASE_URL}/editTab/${song}`, {textTab}, this.options)
      .map((res) => res.json());
  }

  getEdit(id) {
    return this.http.get(`${BASE_URL}/edit/${id}`, this.options)
      .map((res) => res.json());
  }
}
