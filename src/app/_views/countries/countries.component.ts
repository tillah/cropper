import {Component, OnInit} from '@angular/core';
import {CountryService} from '../../_services/country.service';
import {Country} from '../../_models/country';
import {Router} from '@angular/router';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

    public countries: Country[] = [];

    constructor(private router: Router, private countryService: CountryService) { }

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.countryService.findAll().subscribe((countriesFromBackEnd: Country[]) => {
            this.countries = countriesFromBackEnd;
            console.log(countriesFromBackEnd, "Countries")
        });
    }

    onCreate() {
        this.router.navigate(['/create-country']).then();
    }
}
