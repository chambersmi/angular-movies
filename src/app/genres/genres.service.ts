import { Injectable } from '@angular/core';
import { genreCreationDTO, genreDTO } from './genre.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {
  constructor(private http: HttpClient) { }

  //Create a variable for the URL (environment)
  private apiURL = environment.apiURL + '/genres'

  // Create a method to GET ALL GENRES
  // CREATED TO TALK TO API
  getAll(): Observable<genreDTO[]> {
    return this.http.get<genreDTO[]>(this.apiURL)
  }

  create(genre: genreCreationDTO){
    return this.http.post(this.apiURL, genre);
  }
}
