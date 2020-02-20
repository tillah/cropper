import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AddressType} from '../../../_models/address-type';

@Component({
  selector: 'app-create-address-type',
  templateUrl: './create-address-type.component.html',
  styleUrls: ['./create-address-type.component.css']
})
export class CreateAddressTypeComponent implements OnInit {

  addressTypeForm: FormGroup;
  addresstypes: AddressType[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createAddressTypeForm();
  }

  createAddressTypeForm(){
this.addressTypeForm = this.formBuilder.group({
name:['']
});
  }

submit(){
const addressType: AddressType = new AddressType();
addressType.name = this.addressTypeForm.value.name;
this.addresstypes.push(addressType);
console.log(this.addresstypes);
}
}
