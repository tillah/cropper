import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CropGrade} from '../../../_models/crop-grade';

@Component({
  selector: 'app-create-crop-grade',
  templateUrl: './create-crop-grade.component.html',
  styleUrls: ['./create-crop-grade.component.css']
})

export class CreateCropGradeComponent implements OnInit {
  cropgradeForm: FormGroup;
  cropgrades: CropGrade[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createCropGradeForm();
  }

  createCropGradeForm() {
    this.cropgradeForm = this.formBuilder.group({
      name: [''],
      price: [''],
      cropvarietyId: [''],
      cropId: ['']
    });
  }

  submit() {
    const cropgrade: CropGrade = new CropGrade();
    cropgrade.name = this.cropgradeForm.value.name;
    cropgrade.price = this.cropgradeForm.value.price;
    cropgrade.cropId = this.cropgradeForm.value.cropvarietyId;
    cropgrade.cropId = this.cropgradeForm.value.cropId;
    this.cropgrades.push(cropgrade);

    console.log(this.cropgrades);
  }

}
