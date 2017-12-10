import { Routes } from '@angular/router';
import { IsLoggedInService } from './services/isLoggedIn.canactivate.service';
import { HomeComponent } from './home/home.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup',  component: SignupFormComponent,  },
    { path: 'login',  component: LoginFormComponent,  },
    { path: '**', redirectTo: '' }
];
