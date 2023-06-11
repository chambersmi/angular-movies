import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;
  genres = [{id: 1, name: 'Drama'}, {id: 2, name: 'Action'}];
  movies = [
    {title: 'Spider-Man', poster: 'https://m.media-amazon.com/images/I/81Mr06RiwoL._SX342_.jpg'},
    {title: 'Moana', poster: 'https://m.media-amazon.com/images/I/61oDGN2zYiL._SY445_.jpg'},
    {title: 'Inception', poster: 'https://m.media-amazon.com/images/I/61CkZlbKdwL._SX385_.jpg'},
  ];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges.subscribe(values => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });
  }

  filterMovies(values: any) {
    if(values.title) {
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1);
    }
  }

  clearForm() {
    this.form.reset();
  }
}
