import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieDTO = {title: 'Spider-Man', inTheaters: true, summary: "whatever",
    releaseDate: new Date(), trailer: 'ABCDE', poster: 'https://m.media-amazon.com/images/I/61s1SedF0mL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {

  }

}
