import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {District} from '../../../_models/district';

@Component({
  selector: 'app-create-district',
  templateUrl: './create-district.component.html',
  styleUrls: ['./create-district.component.css']
})

export class CreateDistrictComponent implements OnInit {

  districtForm: FormGroup;
  districts: District[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createDistrictForm();
  }
  
  createDistrictForm() {
    this.districtForm = this.formBuilder.group({
      name: [''],
      townId: [''],
      provinceId: [''],
      countryId: ['']
    });

  }

    submit() {
      const district: District = new District();
      district.name = this.districtForm.value.name;
      district.townId = this.districtForm.value.townId;
      district.provinceId = this.districtForm.value.provinceId;
      district.countryId = this.districtForm.value.countryId;
      this.districts.push(district);
  
      console.log(this.districts);
        
    }

  
}



