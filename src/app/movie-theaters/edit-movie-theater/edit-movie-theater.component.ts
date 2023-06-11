import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieTheatersDTO = {name: 'Eaton Rapids', latitude: 42.511793062976984, longitude: -84.65583801269531};

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

    })
  }

  onSaveChanges(movieTheater: movieTheatersCreationDTO) {

  }

}
