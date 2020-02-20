import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Town} from '../../../_models/town';

@Component({
  selector: 'app-create-town',
  templateUrl: './create-town.component.html',
  styleUrls: ['./create-town.component.css']
})
export class CreateTownComponent implements OnInit {
  townForm: FormGroup;
  towns: Town[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createTownForm();
  }

  createTownForm() {
    this.townForm = this.formBuilder.group({
      name: [''],
      provinceId: [''],
      countryId: [''],
    });
  }

  submit() {
    const town: Town = new Town();
    town.name = this.townForm.value.name;
    town.provinceId = this.townForm.value.provinceId;
    town.countryId = this.townForm.value.countryId;
    this.towns.push(town);

    console.log(this.towns);
  }

}
