import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Needed for *ngIf, *ngFor, ngClass
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../movie.model';

@Component({
  selector: 'app-seat-selection',
  standalone: true,
  imports: [CommonModule], // ✅ Add this line
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css']
})
export class SeatSelectionComponent implements OnInit {
  movie: Movie | undefined;
  selectedSeats: string[] = [];
  seatLayout: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id');
    this.movie = this.movieService.getMovieById(Number(movieId)); // 👈 Fix 'string' to 'number'

    this.seatLayout = Array.from({ length: 5 }, (_, rowIndex) => {
      const rowChar = String.fromCharCode(65 + rowIndex);
      return {
        row: rowChar,
        seats: Array.from({ length: 8 }, (_, seatIndex) => ({
          id: `${rowChar}${seatIndex + 1}`,
          booked: false
        }))
      };
    });
  }

  isSelected(seatId: string): boolean {
    return this.selectedSeats.includes(seatId);
  }

  toggleSeat(seat: any): void {
    if (seat.booked) return;

    const index = this.selectedSeats.indexOf(seat.id);
    if (index > -1) {
      this.selectedSeats.splice(index, 1);
    } else {
      this.selectedSeats.push(seat.id);
    }
  }

  confirmBooking(): void {
    alert(`Booking confirmed for ${this.movie?.title}. Seats: ${this.selectedSeats.join(', ')}`);
    this.router.navigate(['/']);
  }
}
