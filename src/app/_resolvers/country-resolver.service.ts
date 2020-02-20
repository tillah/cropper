import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Province} from '../_models/province';
import { CountryService } from '../_services/country.service';
import { Country } from '../_models/country';

@Injectable()
export class CountryResolver  implements Resolve<Country[]> {

    constructor(
        private countryService: CountryService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Country[]> {
        return this.countryService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
           })
        );
    }
}
