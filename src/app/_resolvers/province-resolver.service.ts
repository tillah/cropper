import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Province} from '../_models/province';
import {ProvinceService} from '../_services/province.service';

@Injectable()
export class ProvinceResolver  implements Resolve<Province[]> {

    constructor(
        private _router: Router,
        private provinceService: ProvinceService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Province[]> {
        return this.provinceService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
