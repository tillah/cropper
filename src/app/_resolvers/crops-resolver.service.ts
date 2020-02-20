import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Province} from '../_models/province';
import {ProvinceService} from '../_services/province.service';
import { Crop } from '../_models/crop';
import { CropService } from '../_services/crop.service';

@Injectable()
export class CropsResolver  implements Resolve<Crop[]> {

    constructor(
        private _router: Router,
        private cropsService: CropService
    ) { }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot): Observable<Crop[]> {
        return this.cropsService.findAll().pipe(
            catchError(() => {
                return throwError('Error while trying to retrieve Transactions');
            })
        );
    }
}
