import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Country} from '../_models/country';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class CountryService {

    countries: Country[] = [
        { id: 2432, name: 'Zimbabwe'},
        { id: 3432, name: 'South Africa'},
        { id: 4432, name: 'Zambia'},
        { id: 5432, name: 'Mozambiquex  '},
    ];
    // baseUrl = environment.apiUrl + 'countries';

    constructor(private httpClient: HttpClient) { }

    findAll(): Observable<Country[]> {
   
        return of(this.countries);
    }

    save(country: Country): Observable<Country> {
        // return this.httpClient.post<Country>(this.baseUrl, country);
        this.countries.push(country);
        return of(country);
    }
}
