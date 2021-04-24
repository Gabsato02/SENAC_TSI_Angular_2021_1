import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  movies = new Array<Movie>();

  selectedMovie?: Movie;
  newMovie = '';
  newRating = 0;

  constructor() {
    const alien = new Movie('Alien', 4);
    this.movies.push(alien);

    const parasite = new Movie('Parasite', 5);
    this.movies.push(parasite);

    const soul = new Movie('Soul', 5);
    this.movies.push(soul);
  }

  ngOnInit(): void {
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  addMovie(): void {
    const newMovie = new Movie(this.newMovie, this.newRating);
    this.movies.push(newMovie);
  }

  removeMovie(index: number): void {
    this.movies.splice(index, 1);
  }
}
