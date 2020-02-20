import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Country} from '../../../_models/country';
import {CountryService} from '../../../_services/country.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-create-country',
    templateUrl: './create-country.component.html',
    styleUrls: ['./create-country.component.css']
})
export class CreateCountryComponent implements OnInit {

    countryAdded = false;
    countryForm: FormGroup;
    countries: Country[] = [];

    constructor(
        private router: Router,
        private formBuilder: FormBuilder,
        private countryService: CountryService
    ) { }

    ngOnInit() {
        this.createCountryForm();
    }

    submit() {
        this.countryService.save(this.countryForm.value).subscribe((savedCountryFromBackEnd: Country) => {
            this.countryAdded = true;
            setTimeout(() => {
                this.countryAdded = false;
                this.onBackToList();
            }, 3000);
        }, error => {
            this.countryAdded = false;
        });
    }

    onBackToList() {
        this.router.navigate(['/countries']).then();
    }

    createCountryForm() {
        this.countryForm = this.formBuilder.group({
            name: ['']
        });
    }
}
