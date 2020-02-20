import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Occupation} from '../../../_models/occupation';

@Component({
  selector: 'app-create-occupation',
  templateUrl: './create-occupation.component.html',
  styleUrls: ['./create-occupation.component.css']
})
export class CreateOccupationComponent implements OnInit {

  occupationForm: FormGroup;
  occupations: Occupation[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.createOccupationForm();
  }

  createOccupationForm(){
    this.occupationForm = this.formBuilder.group({
      name:['']
    });
  }

  submit(){
    const occupation: Occupation = new Occupation();
    occupation.name = this.occupationForm.value.name;
  }

}
