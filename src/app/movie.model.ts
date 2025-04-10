export interface Movie {
  id: number;
  title: string;
  genre: string;
  duration: number; // in minutes
  rating: number; // IMDb or user rating
  language: string;
  location: string;
  theater: string;
  showtime: string; // ISO date string or Date
  image: string; // URL to image
}

