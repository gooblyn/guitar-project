import { Routes } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { NewSongFormComponent } from './new-song-form/new-song-form.component';
import { EditSongFormComponent } from './edit-song-form/edit-song-form.component';
import { SongListComponent } from './song-list/song-list.component';
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

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'signup',  component: SignupFormComponent, },
    { path: 'login',  component: LoginFormComponent, },
    { path: 'profile',  component: ProfileComponent,  },
    { path: 'newSong',  component: NewSongFormComponent,  },
    { path: 'songCollection',  component: SongListComponent,  },
    { path: 'song/:id',  component: SongDetailsComponent,  },
    { path: 'editSong/:id',  component: EditSongFormComponent,  },
    { path: 'newGuitar',  component: NewGuitarFormComponent,  },
    { path: 'guitarCollection',  component: GuitarListComponent,  },
    { path: 'guitar/:id',  component: GuitarDetailsComponent,  },
    { path: 'newAmpli',  component: NewAmpliFormComponent,  },
    { path: 'ampliCollection',  component: AmpliListComponent,  },
    { path: 'ampli/:id',  component: AmpliDetailsComponent,  },
    { path: 'newPedal',  component: NewPedalFormComponent,  },
    { path: 'pedalCollection',  component: PedalListComponent,  },
    { path: 'pedal/:id',  component: PedalDetailsComponent,  },
    { path: '**', redirectTo: '' }
];
