import { Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { UploadFileComponent } from './Pages/upload-file/upload-file.component';
import { HomeComponent } from './Pages/home/home.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Upload',
    component: UploadFileComponent,
  },
  { path: '**', component: PageNotFoundComponent },
];
