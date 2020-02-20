import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Ward} from '../../../_models/ward';

@Component({
  selector: 'app-create-ward',
  templateUrl: './create-ward.component.html',
  styleUrls: ['./create-ward.component.css']
})
export class CreateWardComponent implements OnInit {

  wardForm: FormGroup;
  wards: Ward[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createWardForm();
  }

  createWardForm() {
    this.wardForm = this.formBuilder.group({
      name: [''],
      districtId: [''],
      provinceId: [''],
      countryId: [''],
    });
  }

  submit() {
    const ward: Ward = new Ward();
    ward.wardNo = this.wardForm.value.wardNo;
    ward.districtId = this.wardForm.value.districtId;
    ward.provinceId = this.wardForm.value.provinceId;
    ward.countryId = this.wardForm.value.countryId;
    this.wards.push(ward);

    console.log(this.wards);
      
  }

}
