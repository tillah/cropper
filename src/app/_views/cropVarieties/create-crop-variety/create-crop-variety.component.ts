import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CropVariety} from '../../../_models/crop-variety';

@Component({
  selector: 'app-create-crop-variety',
  templateUrl: './create-crop-variety.component.html',
  styleUrls: ['./create-crop-variety.component.css']
})
export class CreateCropVarietyComponent implements OnInit {
  cropvarietyForm: FormGroup;
  cropvarieties: CropVariety[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createCropVarietyForm();
  }

  createCropVarietyForm() {
    this.cropvarietyForm = this.formBuilder.group({
      name: [''],
      cropId: [''],
    });
  }

  submit() {
    const cropvariety: CropVariety = new CropVariety();
    cropvariety.name = this.cropvarietyForm.value.name;
    cropvariety.cropId = this.cropvarietyForm.value.cropId;
    this.cropvarieties.push(cropvariety);

    console.log(this.cropvarieties);
  }

}
