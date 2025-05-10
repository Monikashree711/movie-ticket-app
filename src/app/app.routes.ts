import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: 'movies', component: MovieListComponent },
  {
    path: 'movies/:id',
    loadComponent: () =>
      import('./components/movie-details/movie-details.component').then(m => m.MovieDetailsComponent)
  },
  {
    path: 'movies/:id/book',
    loadComponent: () =>
      import('./components/seat-selection/seat-selection.component').then(m => m.SeatSelectionComponent)
  }
];

