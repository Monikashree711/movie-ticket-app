

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie.model';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    FormsModule // ✅ Required for ngModel to work
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];

  locations: string[] = [];
  selectedLocation: string = '';

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getAllMovies();
    this.filteredMovies = [...this.movies];
    this.locations = [...new Set(this.movies.map(m => m.location))];
  }

  filterMovies(): void {
    if (!this.selectedLocation) {
      this.filteredMovies = [];
      return;
    }

    this.filteredMovies = this.movies.filter(movie =>
      movie.location === this.selectedLocation
    );
  }

  bookMovie(movie: Movie): void {
    alert(`Booking ticket for "${movie.title}" at ${movie.theater}, ${movie.location} on ${new Date(movie.showtime).toLocaleString()}`);
  }
}
