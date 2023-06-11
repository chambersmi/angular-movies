import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { actorCreationDTO } from '../actors.model';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  form: FormGroup;

  @Input()
  model: actorCreationDTO;

  @Output()
  onSaveChanges = new EventEmitter<actorCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required]
      }],
      dateOfBirth: '',
      pictures: '',
      biography: ''
    });

    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  // onImageSelected(image) {
  //   this.form.get('picture').setValue(image);
  // }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  onImageSelected(file: File) {
    // Perform the necessary logic to convert the File to a string
    // For example, you can create a FileReader and read the file as a data URL
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.model.picture = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  changeMarkdown(content) {
    this.form.get('biography').setValue(content);
  }

}
