import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

export const ROUTES: Routes = [
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'users', component: UserListComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
