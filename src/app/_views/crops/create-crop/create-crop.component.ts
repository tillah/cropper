import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Crop} from '../../../_models/crop';

@Component({
  selector: 'app-create-crop',
  templateUrl: './create-crop.component.html',
  styleUrls: ['./create-crop.component.css']
})
export class CreateCropComponent implements OnInit {
  cropForm: FormGroup;
  crops: Crop[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createCropForm();
  }

  createCropForm() {
    this.cropForm = this.formBuilder.group({
      name: ['']
    });
  }
  submit() {
    const crop: Crop = new Crop();
    crop.name = this.cropForm.value.name;
    this.crops.push(crop);

    console.log(this.crops);
  }


}
