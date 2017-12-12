import { Routes } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { NewSongFormComponent } from './new-song-form/new-song-form.component';
import { SongListComponent } from './song-list/song-list.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { NewGuitarFormComponent } from './new-guitar-form/new-guitar-form.component';
import { GuitarListComponent } from './guitar-list/guitar-list.component';
import { GuitarDetailsComponent } from './guitar-details/guitar-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'signup',  component: SignupFormComponent, },
    { path: 'login',  component: LoginFormComponent, },
    { path: 'profile',  component: ProfileComponent,  },
    { path: 'newSong',  component: NewSongFormComponent,  },
    { path: 'songCollection',  component: SongListComponent,  },
    { path: 'song/:id',  component: SongDetailsComponent,  },
    { path: 'newGuitar',  component: NewGuitarFormComponent,  },
    { path: 'guitarCollection',  component: GuitarListComponent,  },
    { path: 'guitar/:id',  component: GuitarDetailsComponent,  },
    { path: '**', redirectTo: '' }
];
