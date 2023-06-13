import { Injectable } from '@angular/core';
import { actorCreationDTO } from './actors.model';
import { formatDateFormData } from '../utilities/utils';
import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/actors';

  create(actor: actorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiURL, formData);
  }

  private buildFormData(actor: actorCreationDTO): FormData {
    // working with FromForm
    // Form Data object
    const formData = new FormData();

    formData.append('name', actor.name);

    if(actor.biography) {
      formData.append('biography', actor.biography);
    }

    if(actor.dateOfBirth) {
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }

    if(actor.picture) {
      formData.append('picture', actor.picture);
    }

    return formData;
  }
}
