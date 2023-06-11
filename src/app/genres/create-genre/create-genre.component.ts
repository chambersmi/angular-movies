import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { genreCreationDTO } from '../genre.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {
  constructor(private router: Router, private genresService:GenresService) {}

  ngOnInit(): void {

  }

  saveChanges(genreCreationDTO: genreCreationDTO) {
    this.genresService.create(genreCreationDTO).subscribe(() => {
      this.router.navigate(['/genres']);
    }, error => console.error(error));

  }
}
