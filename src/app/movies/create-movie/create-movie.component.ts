import { Component, OnInit } from '@angular/core';
import { movieCreationDTO } from '../movies.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent {

  saveChanges(movieCreationDTO: movieCreationDTO) {
    console.log(movieCreationDTO);

  }
}
