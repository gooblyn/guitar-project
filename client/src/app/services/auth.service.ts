import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/auth";

@Injectable()
export class AuthService {

  private user:object;
  public userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials:true};

  constructor(private http: Http) {
    this.isLoggedIn().subscribe();
  }

  public getLoginEventEmitter():EventEmitter<any>{
    return this.userLoginEvent;
  }

  public getUser(){
    return this.user;
  }

  private emitUserLoginEvent(user){
    this.user = user;
    this.userLoginEvent.emit(user);
    return this.user;
  }

  private handleError(e) {
    console.log("AUTH ERROR");
    return Observable.throw(e);
  }

  signup (username:string, password:string, name:string, email:string) {
    console.log("entrooo")
    return this.http.post(`${BASEURL}/signup`, {username,password,name,email}, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }

  login(username:string ,password:string) {
    return this.http.post(`${BASEURL}/login`, {username,password}, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }

  logout() {
    return this.http.get(`${BASEURL}/logout`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(null))
      .catch(this.handleError);
  }

  isLoggedIn() {
    return this.http.get(`${BASEURL}/loggedin`, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }
}
