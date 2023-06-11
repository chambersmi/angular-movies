import { Component, OnInit } from '@angular/core';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css']
})
export class IndexGenresComponent implements OnInit {

  constructor(private genresService: GenresService) {}

  ngOnInit(): void {
    //In order to use an observable, you have to subscribe to it
    // Until we subscribe to the observable, an HTTP request will
    // not be sent.

    this.genresService.getAll().subscribe(genres => {
      console.log(genres);
    })
  }
}
