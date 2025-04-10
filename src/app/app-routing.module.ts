import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';

const routes: Routes = [
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieDetailsComponent },
  { path: 'movies/:id/book', component: SeatSelectionComponent },
  { path: 'booking/:id', component: BookingConfirmationComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
