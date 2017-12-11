import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { UserService } from './services/user.service';
import { SongService } from './services/song.service';

import {routes} from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { SongListComponent } from './song-list/song-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupFormComponent,
    LoginFormComponent,
    ProfileComponent,
    SongListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, UserService, SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
