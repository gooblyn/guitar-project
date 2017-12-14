import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { UserService } from './services/user.service';
import { SongService } from './services/song.service';
import { GuitarService } from './services/guitar.service';
import { AmplifierService } from './services/ampli.service';
import { PedalService } from './services/pedal.service';

import {routes} from './routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { SongListComponent } from './song-list/song-list.component';
import { NewSongFormComponent } from './new-song-form/new-song-form.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { NewGuitarFormComponent } from './new-guitar-form/new-guitar-form.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { GuitarDetailsComponent } from './guitar-details/guitar-details.component';
import { NewAmpliFormComponent } from './new-ampli-form/new-ampli-form.component';
import { AmpliListComponent } from './ampli-list/ampli-list.component';
import { AmpliDetailsComponent } from './ampli-details/ampli-details.component';
import { NewPedalFormComponent } from './new-pedal-form/new-pedal-form.component';
import { PedalDetailsComponent } from './pedal-details/pedal-details.component';
import { PedalListComponent } from './pedal-list/pedal-list.component';
import { EditSongFormComponent } from './edit-song-form/edit-song-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupFormComponent,
    LoginFormComponent,
    ProfileComponent,
    SongListComponent,
    NewSongFormComponent,
    SongDetailsComponent,
    NewGuitarFormComponent,
    GuitarListComponent,
    GuitarDetailsComponent,
    NewAmpliFormComponent,
    AmpliListComponent,
    AmpliDetailsComponent,
    NewPedalFormComponent,
    PedalDetailsComponent,
    PedalListComponent,
    EditSongFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService, IsLoggedInService, UserService, SongService, GuitarService, AmplifierService, PedalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
