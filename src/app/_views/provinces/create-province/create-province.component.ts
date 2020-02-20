import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Province} from '../../../_models/province';
import {ProvinceService} from '../../../_services/province.service';
import {Router} from '@angular/router';
import {CountryService} from '../../../_services/country.service';
import {Country} from '../../../_models/country';

@Component({
    selector: 'app-create-province',
    templateUrl: './create-province.component.html',
    styleUrls: ['./create-province.component.css']
})
export class CreateProvinceComponent implements OnInit {

    provinceAdded = false;
    provinceForm: FormGroup;
    countries: Country[] = [];
    province: Province = new Province();

    constructor(
        private route: Router,
        private formBuilder: FormBuilder,
        private countryService: CountryService,
        private provinceService: ProvinceService
    ) { }

    ngOnInit() {
        this.getCountries();
        this.createProvinceForm();
    }

    createProvinceForm() {
        this.provinceForm = this.formBuilder.group({
            name: [''],
            countryId: [''],
        });
    }

    submit() {

        this.province = Object.assign({}, this.provinceForm.value);

        this.provinceService.save(this.province).subscribe((province: Province) => {
            this.provinceAdded = true;
            // this.getProvinces();
            setTimeout(() => {
                this.provinceAdded = false;
                this.onBackToList();
            }, 3000);
        }, error => {
            this.provinceAdded = false;
        });
    }

    getCountries() {
        this.countryService.findAll().subscribe((countries: Country[]) => {
            this.countries = countries;
        });
    }

    onBackToList() {
        this.route.navigate(['/provinces']).then();
    }
}
